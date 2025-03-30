import { Link } from 'react-router-dom';
import { Movie } from '../types/movie';
import { Card, Image, Content, Title, Rating } from '../styles/components/MovieCard.styles';

interface MovieCardProps {
  movie: Movie;
}

export const MovieCard = ({ movie }: MovieCardProps) => {
  const imageUrl = movie.poster_path
    ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
    : 'https://via.placeholder.com/500x750?text=Sem+imagem';

  return (
    <Link to={`/movie/${movie.id}`} style={{ textDecoration: 'none' }}>
      <Card>
        <Image src={imageUrl} alt={movie.title} />
        <Content>
          <Title>{movie.title}</Title>
          <Rating>★ {movie.vote_average.toFixed(1)}</Rating>
        </Content>
      </Card>
    </Link>
  );
};