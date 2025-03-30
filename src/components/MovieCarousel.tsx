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
  const itemWidth = 280; // 260px do item + 20px de gap
  
  // Duplicate the movies array to create the illusion of infinite scroll
  const duplicatedMovies = [...movies, ...movies, ...movies];

  useEffect(() => {
    if (carouselRef.current) {
      const containerWidth = carouselRef.current.offsetWidth;
      const totalWidth = duplicatedMovies.length * itemWidth;
      setMaxTranslate(containerWidth - totalWidth);
      
      // Start from the middle set of movies
      setTranslateX(-movies.length * itemWidth);
    }
  }, [movies.length]);

  const handlePrev = () => {
    setTranslateX(prev => {
      const newTranslate = prev + itemWidth;
      // If we're at the start of the first set, jump to the middle set
      if (newTranslate > -itemWidth) {
        return -movies.length * itemWidth;
      }
      return newTranslate;
    });
  };

  const handleNext = () => {
    setTranslateX(prev => {
      const newTranslate = prev - itemWidth;
      // If we're at the end of the last set, jump to the middle set
      if (newTranslate < maxTranslate) {
        return -movies.length * itemWidth;
      }
      return newTranslate;
    });
  };

  return (
    <CarouselContainer ref={carouselRef}>
      <CarouselButton
        direction="left"
        onClick={handlePrev}
      >
        <i className={PrimeIcons.ANGLE_LEFT}></i>
      </CarouselButton>
      <CarouselContent $translateX={translateX}>
        {duplicatedMovies.map((movie, index) => (
          <CarouselItem key={`${movie.id}-${index}`}>
            <MovieCard movie={movie} />
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselButton
        direction="right"
        onClick={handleNext}
      >
        <i className={PrimeIcons.ANGLE_RIGHT}></i>
      </CarouselButton>
    </CarouselContainer>
  );
};