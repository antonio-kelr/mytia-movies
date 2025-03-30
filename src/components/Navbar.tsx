import { Link, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { useState } from 'react';

const Nav = styled.nav`
  background-color: #1a1a1a;
  padding: 1rem 2rem;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);

  @media (max-width: 768px) {
    padding: 0.5rem 1rem;
  }
`;

const Logo = styled(Link)`
  color: #f5c518;
  text-decoration: none;
  font-size: 1.5rem;
  font-weight: bold;
  display: flex;
  align-items: center;
  gap: 0.5rem;

  &:hover {
    color: #ffd700;
  }

  @media (max-width: 768px) {
    font-size: 1.2rem;
  }

  @media (max-width: 480px) {
    font-size: 1rem;
  }
`;

const NavLinks = styled.div`
  display: flex;
  gap: 2rem;
  align-items: center;

  @media (max-width: 768px) {
    gap: 1rem;
  }

  @media (max-width: 480px) {
    display: none;
  }
`;

const MobileMenuButton = styled.button`
  display: none;
  background: none;
  border: none;
  color: #f5c518;
  font-size: 1.5rem;
  cursor: pointer;
  padding: 0.5rem;
  z-index: 1001;

  @media (max-width: 480px) {
    display: block;
  }
`;

const MobileNav = styled.div<{ isOpen: boolean }>`
  display: none;
  position: fixed;
  top: 60px;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #1a1a1a;
  padding: 1rem;
  transform: translateY(${props => props.isOpen ? '0' : '-100%'});
  transition: transform 0.3s ease-in-out;
  z-index: 999;
  overflow-y: auto;

  @media (max-width: 480px) {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }
`;

const NavLink = styled(Link)`
  color: #fff;
  text-decoration: none;
  font-size: 1rem;
  transition: all 0.2s;
  padding: 0.8rem 1.2rem;
  border-radius: 4px;
  display: block;

  &:hover {
    color: #f5c518;
    background-color: rgba(255, 255, 255, 0.1);
  }

  &.active {
    color: #f5c518;
    font-weight: bold;
  }

  @media (max-width: 768px) {
    font-size: 0.9rem;
    padding: 0.6rem 1rem;
  }

  @media (max-width: 480px) {
    padding: 1rem;
    text-align: center;
    border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  }
`;

const SearchContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-left: 2rem;

  @media (max-width: 768px) {
    margin-left: 1rem;
  }

  @media (max-width: 480px) {
    display: none;
  }
`;

const MobileSearchContainer = styled.div`
  display: none;
  width: 100%;
  margin-top: 1rem;
  padding: 0 1rem;

  @media (max-width: 480px) {
    display: flex;
    flex-direction: column;
    gap: 0.8rem;
  }
`;

const SearchInput = styled.input`
  padding: 0.8rem 1.2rem;
  border: none;
  border-radius: 20px;
  background-color: rgba(255, 255, 255, 0.1);
  color: white;
  font-size: 0.9rem;
  width: 200px;
  transition: all 0.2s;

  &::placeholder {
    color: rgba(255, 255, 255, 0.7);
  }

  &:focus {
    outline: none;
    background-color: rgba(255, 255, 255, 0.2);
    width: 250px;
  }

  @media (max-width: 768px) {
    width: 150px;
    font-size: 0.8rem;
    padding: 0.6rem 1rem;

    &:focus {
      width: 180px;
    }
  }

  @media (max-width: 480px) {
    width: 100%;
    padding: 1rem;
    font-size: 1rem;

    &:focus {
      width: 100%;
    }
  }
`;

const SearchButton = styled.button`
  background-color: #f5c518;
  color: #1a1a1a;
  border: none;
  padding: 0.8rem 1.2rem;
  border-radius: 20px;
  font-weight: bold;
  cursor: pointer;
  transition: all 0.2s;
  white-space: nowrap;

  &:hover {
    background-color: #ffd700;
  }

  @media (max-width: 768px) {
    padding: 0.6rem 1rem;
    font-size: 0.9rem;
  }

  @media (max-width: 480px) {
    width: 100%;
    padding: 1rem;
    font-size: 1rem;
  }
`;

export const Navbar = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navigate = useNavigate();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/movies?search=${encodeURIComponent(searchQuery.trim())}`);
      setSearchQuery('');
      setIsMobileMenuOpen(false);
    }
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <>
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
              <SearchInput
                type="text"
                placeholder="Buscar filmes..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <SearchButton type="submit">Buscar</SearchButton>
            </form>
          </SearchContainer>
        </NavLinks>
        <MobileMenuButton onClick={toggleMobileMenu}>
          {isMobileMenuOpen ? '✕' : '☰'}
        </MobileMenuButton>
      </Nav>
      <MobileNav isOpen={isMobileMenuOpen}>
        <NavLink to="/" onClick={() => setIsMobileMenuOpen(false)}>Início</NavLink>
        <NavLink to="/movies" onClick={() => setIsMobileMenuOpen(false)}>Filmes</NavLink>
        <NavLink to="/popular" onClick={() => setIsMobileMenuOpen(false)}>Populares</NavLink>
        <MobileSearchContainer>
          <form onSubmit={handleSearch}>
            <SearchInput
              type="text"
              placeholder="Buscar filmes..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <SearchButton type="submit">Buscar</SearchButton>
          </form>
        </MobileSearchContainer>
      </MobileNav>
    </>
  );
}; 