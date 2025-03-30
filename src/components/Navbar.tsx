import { useNavigate, useLocation } from 'react-router-dom';
import { useState, useEffect, useCallback, useRef } from 'react';
import debounce from 'lodash/debounce';
import {
  NavWrapper,
  Nav,
  Logo,
  NavLink,
  NavLinks,
  MobileMenuButton,
  MobileNav,
  SearchContainer,
  SearchContainerMobile,
  SearchInput,
  ErrorMessage
} from '../styles/components/Navbar.styles';



export const Navbar = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const navigate = useNavigate();
  const location = useLocation();

  // Create refs for search inputs
  const desktopSearchRef = useRef<HTMLInputElement>(null);
  const mobileSearchRef = useRef<HTMLInputElement>(null);

  // Add click outside handler for search inputs
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        (desktopSearchRef.current && !desktopSearchRef.current.contains(event.target as Node)) &&
        (mobileSearchRef.current && !mobileSearchRef.current.contains(event.target as Node))
      ) {
        setSearchQuery('');
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const debouncedSearch = useCallback(
    debounce(async (query: string) => {
      if (query.trim()) {
        try {
          // Aqui você pode adicionar uma chamada à API para verificar se existem resultados
          // Por exemplo: const response = await fetch(`/api/search?q=${query}`);
          // if (!response.ok) throw new Error('Erro na busca');
          
          navigate(`/movies?search=${encodeURIComponent(query.trim())}`);
          setError(null);
        } catch (err) {
          setError('Não foi possível encontrar resultados para sua busca. Tente novamente.');
          setTimeout(() => setError(null), 5000); // Remove o erro após 5 segundos
        }
      } else {
        navigate(location.pathname);
        setError(null);
      }
    }, 500),
    [navigate, location.pathname]
  );

  useEffect(() => {
    debouncedSearch(searchQuery);
    return () => {
      debouncedSearch.cancel();
    };
  }, [searchQuery, debouncedSearch]);

  const handleSearch = async (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      try {
        navigate(`/movies?search=${encodeURIComponent(searchQuery.trim())}`);
        setError(null);
        setIsMobileMenuOpen(false);
      } catch (err) {
        setError('Não foi possível encontrar resultados para sua busca. Tente novamente.');
        setTimeout(() => setError(null), 5000);
      }
    } else {
      navigate(location.pathname);
      setError(null);
    }
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const mobileNav = document.querySelector('.mobile-nav');
      const mobileButton = document.querySelector('.mobile-button');
      if (
        isMobileMenuOpen &&
        mobileNav &&
        !mobileNav.contains(event.target as Node) &&
        !mobileButton?.contains(event.target as Node)
      ) {
        setIsMobileMenuOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isMobileMenuOpen]);

  // Close mobile menu on route change
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  return (
    <>
      <NavWrapper>
        <Nav>
          <Logo to="/">
            <span>🎬</span> MyTia Movies
          </Logo>
          <NavLinks>
            <NavLink to="/">Início</NavLink>
            <NavLink to="/movies">Filmes</NavLink>
            <NavLink to="/popular">Populares</NavLink>
            <SearchContainer>
              <form onSubmit={handleSearch}>
                <i className="pi pi-search"></i>
                <SearchInput
                  ref={desktopSearchRef}
                  type="text"
                  placeholder="Buscar filmes..."
                  value={searchQuery}
                  onChange={(e) => {
                    setSearchQuery(e.target.value);
                    debouncedSearch(e.target.value);
                  }}
                  autoComplete="off"
                />
              </form>
            </SearchContainer>
          </NavLinks>
          <MobileMenuButton 
            onClick={toggleMobileMenu}
            className="mobile-button"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? '✕' : '☰'}
          </MobileMenuButton>
        </Nav>
        <SearchContainerMobile>
          <form onSubmit={handleSearch}>
            <i className="pi pi-search"></i>
            <SearchInput
              ref={mobileSearchRef}
              type="text"
              placeholder="Buscar filmes..."
              value={searchQuery}
              onChange={(e) => {
                setSearchQuery(e.target.value);
                debouncedSearch(e.target.value);
              }}
              autoComplete="off"
            />
          </form>
        </SearchContainerMobile>
      </NavWrapper>

      {error && <ErrorMessage>{error}</ErrorMessage>}

      <MobileNav className={`mobile-nav ${isMobileMenuOpen ? 'open' : ''}`}>
        <NavLink to="/" onClick={() => setIsMobileMenuOpen(false)}>
          Início
        </NavLink>
        <NavLink to="/movies" onClick={() => setIsMobileMenuOpen(false)}>
          Filmes
        </NavLink>
        <NavLink to="/popular" onClick={() => setIsMobileMenuOpen(false)}>
          Populares
        </NavLink>
      </MobileNav>
    </>
  );
};