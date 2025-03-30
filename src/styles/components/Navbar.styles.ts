import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const NavWrapper = styled.div`
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

export const Nav = styled.nav`
  max-width: 1400px;
  margin: 0 auto;
   padding: 20px 0px;

   
  height: 70px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media (max-width: 768px) {
    padding: 0 15px;
    height: 60px;
  }
`;

export const Logo = styled(Link)`
  color: #f5c518;
  text-decoration: none;
  font-size: 1.8rem;
  font-weight: 700;
  display: flex;
  align-items: center;
  
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
  transition: all 0.3s ease;

  &:hover {
    color: #ffd700;
    transform: translateY(-2px);
  }

  @media (max-width: 960px) {
    font-size: 1.5rem;
  }

  @media (max-width: 900px) {
    font-size: 1.3rem;
  }
`;

export const NavLink = styled(Link)`
  color: white;
  text-decoration: none;
  font-size: 1rem;
  font-weight: 500;
  transition: all 0.3s ease;
  padding: 0.5rem;
  border-radius: 4px;
  

  &:hover {
    color: #f5c518;
    background: rgba(255, 255, 255, 0.05);
  }

  @media (max-width: 480px) {
    padding: 1rem;
    font-size: 1.1rem;
    width: 100%;
    text-align: center;
    background: rgba(255, 255, 255, 0.05);
    
    &:hover {
      background: rgba(255, 255, 255, 0.1);
    }
  }
`;

export const NavLinks = styled.div`
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

export const MobileMenuButton = styled.button`
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
    color: #ffd700;
  }

  @media (max-width: 480px) {
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

export const MobileNav = styled.div`
  display: none;
  position: fixed;
  top: 60px;
  left: 0;

  
  right: 0;
  
  bottom: 0;
  background: rgba(26, 26, 26, 0.98);
  padding: 2rem 1rem;
  transform: translateX(100%);
  transition: transform 0.3s ease-in-out;
  z-index: 1233;
  overflow-y: auto;
  backdrop-filter: blur(10px);

  &.open {
    transform: translateX(0);
  }

  @media (max-width: 480px) {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }
`;

export const SearchContainer = styled.div`
  position: relative;
  margin-left: 2rem;
  
  

  form {
    position: relative;
  }

  .pi-search {
    position: absolute;
    left: 12px;
    top: 50%;
    transform: translateY(-50%);
    color: rgba(255, 255, 255, 0.5);
    font-size: 1rem;
    pointer-events: none;
    z-index: 1;
  }

  @media (max-width: 768px) {
    margin-left: 1rem;
  }

  @media (max-width: 960px) {
    display: none;
  }
`;


export const SearchInput = styled.input`
  padding: 0.8rem 1.2rem 0.8rem 2.5rem;
  border: 2px solid rgba(255, 255, 255, 0.1);
  border-radius: 8px;
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

    &:focus {
      width: 220px;
    }
  }

  @media (max-width: 480px) {
    width: 100%;
    height: 45px;
    font-size: 1rem;
    padding: 0.8rem 1.2rem 0.8rem 2.5rem;

    &:focus {
      width: 100%;
    }
  }
`;

export const ErrorMessage = styled.div`
  position: fixed;
  top: 80px;
  left: 50%;
  transform: translateX(-50%);
  background: rgba(220, 53, 69, 0.9);
  color: white;
  padding: 1rem 2rem;
  border-radius: 8px;
  font-size: 1rem;
  z-index: 1001;
  animation: slideDown 0.3s ease-out;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
  backdrop-filter: blur(5px);
  max-width: 90%;
  text-align: center;

  @keyframes slideDown {
    from {
      transform: translate(-50%, -100%);
      opacity: 0;
    }
    to {
      transform: translate(-50%, 0);
      opacity: 1;
    }
  }
`;
export const SearchContainerMobile = styled(SearchContainer)`
  display: none;

  margin: 0;
  width: 100%;
  padding: 10px;

  form {
    width: 100%;
  }

  ${SearchInput} {
    width: 100%;
    

    &:focus {
      width: 100%;
    }
  }

  @media (max-width: 960px) {
    display: block;
  }

`;
