import styled from 'styled-components';

export const CarouselContainer = styled.div`
  position: relative;
  width: 100%;
  overflow: hidden;
  margin: 20px 0;
  z-index: 1;
`;

export const CarouselContent = styled.div<{ $translateX: number }>`
  display: flex;
  gap: 20px;
  transition: transform 0.3s ease-in-out;
  transform: translateX(${props => props.$translateX}px);
  padding: 10px 0;
`;

export const CarouselItem = styled.div`
  flex: 0 0 260px;
  transition: transform 0.2s;

  &:hover {
    transform: scale(1.05);
  }

  @media (max-width: 768px) {
    flex: 0 0 150px;
  }
`;

export const CarouselButton = styled.button<{ direction: 'left' | 'right' }>`
  position: absolute;
  top: 50%;
  ${props => props.direction === 'left' ? 'left: 10px;' : 'right: 10px;'}
  transform: translateY(-50%);
  background: rgba(0, 0, 0, 0.5);
  color: white;
  border: none;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.2s;
  z-index: 2;

  &:hover {
    background: rgba(0, 0, 0, 0.8);
  }

  &:disabled {
    opacity: 0.5;
  }

  i {
    font-size: 1.2rem;
  }
`;