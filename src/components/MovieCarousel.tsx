import { useState, useRef, useEffect } from 'react';
import styled from 'styled-components';
import { MovieCard } from './MovieCard';
import { Movie } from '../types/movie';
import { PrimeIcons } from 'primereact/api';

const CarouselContainer = styled.div`
  position: relative;
  width: 100%;

  overflow: hidden;
  margin: 20px 0;
  z-index: 1;
`;

const CarouselContent = styled.div<{ $translateX: number }>`
  display: flex;
  gap: 20px;
  
  
  transition: transform 0.3s ease-in-out;
  transform: translateX(${props => props.$translateX}px);
  padding: 10px 0;
`;

const CarouselItem = styled.div`
  flex: 0 0 260px; /* Largura fixa */
  transition: transform 0.2s;

  &:hover {
    transform: scale(1.05);
  }

  @media (max-width: 768px) {
    flex: 0 0 150px;
  }
`;

const CarouselButton = styled.button<{ direction: 'left' | 'right' }>`
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
    cursor: not-allowed;
  }

  i {
    font-size: 1.2rem;
  }

  @media (max-width: 768px) {
    width: 30px;
    
    height: 30px;

    i {
      font-size: 1rem;
    }
  }
`;

interface MovieCarouselProps {
  movies: Movie[];
}

export const MovieCarousel = ({ movies }: MovieCarouselProps) => {
  const [translateX, setTranslateX] = useState(0);
  const carouselRef = useRef<HTMLDivElement>(null);
  const [maxTranslate, setMaxTranslate] = useState(0);
  const itemWidth = 280; // 260px do item + 20px de gap

  useEffect(() => {
    if (carouselRef.current) {
      const containerWidth = carouselRef.current.offsetWidth;
      const totalWidth = movies.length * itemWidth;
      setMaxTranslate(containerWidth - totalWidth);
    }
  }, [movies.length]);

  const handlePrev = () => {
    setTranslateX(prev => Math.min(0, prev + itemWidth));
  };

  const handleNext = () => {
    setTranslateX(prev => Math.max(maxTranslate, prev - itemWidth));
  };

  return (
    <CarouselContainer ref={carouselRef}>
      <CarouselButton
        direction="left"
        onClick={handlePrev}
        disabled={translateX >= 0}
      >
        <i className={PrimeIcons.ANGLE_LEFT}></i>
      </CarouselButton>
      <CarouselContent $translateX={translateX}>
        {movies.map(movie => (
          <CarouselItem key={movie.id}>
            <MovieCard movie={movie} />
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselButton
        direction="right"
        onClick={handleNext}
        disabled={translateX <= maxTranslate}
      >
        <i className={PrimeIcons.ANGLE_RIGHT}></i>
      </CarouselButton>
    </CarouselContainer>
  );
}; 