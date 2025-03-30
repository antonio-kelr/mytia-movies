import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import api from '../services/api';
import { Movie } from '../types/movie';
import {
  Container,
  Content,
  BackButton,
  MovieContainer,
  Poster,
  Info,
  Rating,
  ReleaseDate
} from '../styles/pages/MovieDetails.styles';

export const MovieDetails = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [movie, setMovie] = useState<Movie | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchMovie = async () => {
      try {
        setLoading(true);
        const response = await api.get<Movie>(`/movie/${id}`);
        setMovie(response.data);
      } catch (err) {
        setError('Erro ao carregar detalhes do filme');
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchMovie();
  }, [id]);

  if (loading) return <div>Carregando...</div>;
  if (error) return <div>{error}</div>;
  if (!movie) return <div>Filme não encontrado</div>;

  const imageUrl = movie.poster_path
    ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
    : 'https://via.placeholder.com/500x750?text=Sem+imagem';

  return (
    <Container>
      <Content>
        <BackButton onClick={() => navigate('/')}>Voltar</BackButton>
        
        <MovieContainer>
          <Poster src={imageUrl} alt={movie.title} />
          <Info>
            <h1>{movie.title}</h1>
            <ReleaseDate>Data de lançamento: {new Date(movie.release_date).toLocaleDateString('pt-BR')}</ReleaseDate>
            <Rating>★ {movie.vote_average.toFixed(1)}</Rating>
            <p>{movie.overview}</p>
          </Info>
        </MovieContainer>
      </Content>
    </Container>
  );
};