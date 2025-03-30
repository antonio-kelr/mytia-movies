import { Link, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { useState } from 'react';

const NavWrapper = styled.div`
  background: rgba(26, 26, 26, 0.95);
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.2);
  backdrop-filter: blur(10px);
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
`;

const Nav = styled.nav`
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 20px;
  height: 70px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media (max-width: 768px) {
    padding: 0 15px;
    height: 60px;
  }
`;

const Logo = styled(Link)`
  color: #f5c518;
  text-decoration: none;
  font-size: 1.8rem;
  font-weight: 700;
  display: flex;
  align-items: center;
  gap: 0.8rem;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
  transition: all 0.3s ease;

  &:hover {
    color: #ffd700;
    transform: translateY(-2px);
  }

  @media (max-width: 768px) {
    font-size: 1.5rem;
  }

  @media (max-width: 480px) {
    font-size: 1.3rem;
  }
`;

const NavLinks = styled.div`
  display: flex;
  gap: 2.5rem;
  align-items: center;

  @media (max-width: 768px) {
    gap: 1.5rem;
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
  font-size: 1.8rem;
  cursor: pointer;
  padding: 0.5rem;
  z-index: 1001;
  transition: all 0.3s ease;

  &:hover {
    transform: scale(1.1);
  }

  @media (max-width: 480px) {
    display: block;
  }
`;

const MobileNav = styled.div`
  display: none;
  position: fixed;
  top: 60px;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(26, 26, 26, 0.95);
  padding: 2rem;
  transform: translateY(-100%);
  transition: transform 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  z-index: 999;
  overflow-y: auto;
  backdrop-filter: blur(10px);

  &.open {
    transform: translateY(0);
  }

  @media (max-width: 480px) {
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
  }
`;

const NavLink = styled(Link)`
  color: #ffffff;
  text-decoration: none;
  font-size: 1.1rem;
  transition: all 0.3s ease;
  padding: 0.8rem 1.2rem;
  border-radius: 8px;
  display: block;
  position: relative;
  font-weight: 500;

  &:hover {
    color: #f5c518;
    background: rgba(245, 197, 24, 0.1);
  }

  &.active {
    color: #f5c518;
    font-weight: 600;

    &::after {
      content: '';
      position: absolute;
      bottom: 0;
      left: 50%;
      transform: translateX(-50%);
      width: 30px;
      height: 3px;
      background: #f5c518;
      border-radius: 2px;
    }
  }

  @media (max-width: 768px) {
    font-size: 1rem;
    padding: 0.6rem 1rem;
  }

  @media (max-width: 480px) {
    padding: 1rem;
    text-align: center;
    border-bottom: 1px solid rgba(255, 255, 255, 0.1);
    font-size: 1.2rem;
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
    gap: 1rem;
  }
`;

const SearchInput = styled.input`
  padding: 0.8rem 1.2rem;
  border: 2px solid rgba(255, 255, 255, 0.1);
  border-radius: 25px;
  background: rgba(255, 255, 255, 0.05);
  color: white;
  font-size: 1rem;
  width: 250px;
  height: 45px;
  transition: all 0.3s ease;

  &::placeholder {
    color: rgba(255, 255, 255, 0.5);
  }

  &:focus {
    outline: none;
    border-color: #f5c518;
    background: rgba(255, 255, 255, 0.1);
    width: 300px;
  }

  @media (max-width: 768px) {
    width: 200px;
    height: 40px;
    font-size: 0.9rem;
    padding: 0.7rem 1rem;

    &:focus {
      width: 220px;
    }
  }

  @media (max-width: 480px) {
    width: 100%;
    height: 45px;
    padding: 1rem;
    font-size: 1rem;

    &:focus {
      width: 100%;
    }
  }
`;

const SearchButton = styled.button`
  background: #f5c518;
  color: #1a1a1a;
  border: none;
  padding: 0.8rem 1.5rem;
  border-radius: 25px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  white-space: nowrap;
  height: 45px;
  font-size: 1rem;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);

  &:hover {
    background: #ffd700;
    transform: translateY(-2px);
    box-shadow: 0 6px 16px rgba(0, 0, 0, 0.3);
  }

  @media (max-width: 768px) {
    padding: 0.7rem 1.2rem;
    font-size: 0.9rem;
    height: 40px;
  }

  @media (max-width: 480px) {
    width: 100%;
    padding: 1rem;
    font-size: 1rem;
    height: 45px;
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
      </NavWrapper>
      <MobileNav className={isMobileMenuOpen ? 'open' : ''}>
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