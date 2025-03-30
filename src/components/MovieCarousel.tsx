import { useState, useRef, useEffect } from 'react';
import { MovieCard } from './MovieCard';
import { Movie } from '../types/movie';
import { PrimeIcons } from 'primereact/api';
import { 
  CarouselContainer, 
  CarouselContent, 
  CarouselItem, 
  CarouselButton 
} from '../styles/components/MovieCarousel.styles';

interface MovieCarouselProps {
  movies: Movie[];
}

export const MovieCarousel = ({ movies }: MovieCarouselProps) => {
  const [translateX, setTranslateX] = useState(0);
  const carouselRef = useRef<HTMLDivElement>(null);
  const [maxTranslate, setMaxTranslate] = useState(0);
  const [itemWidth, setItemWidth] = useState(280); // valor inicial para desktop

  useEffect(() => {
    const updateCarouselDimensions = () => {
      if (carouselRef.current) {
        // Define a largura do item com base no tamanho da tela
        let newItemWidth = 280; // desktop (260px + 20px gap)
        if (window.innerWidth <= 768) {
          newItemWidth = 155; // tablet (140px + 15px gap)
        }
        if (window.innerWidth <= 480) {
          newItemWidth = 135; // mobile (120px + 15px gap)
        }

        setItemWidth(newItemWidth);

        const containerWidth = carouselRef.current.offsetWidth - 80; // subtrai o padding (40px de cada lado)
        const totalWidth = movies.length * newItemWidth;
        setMaxTranslate(Math.min(0, containerWidth - totalWidth));
        // Reseta a posição se necessário
        setTranslateX(prev => Math.max(Math.min(0, prev), containerWidth - totalWidth));
      }
    };

    updateCarouselDimensions();
    window.addEventListener('resize', updateCarouselDimensions);

    return () => {
      window.removeEventListener('resize', updateCarouselDimensions);
    };
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
        {movies.map((movie) => (
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