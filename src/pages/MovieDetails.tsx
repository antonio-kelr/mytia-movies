import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import api from '../services/api';
import { Movie } from '../types/movie';

const Container = styled.div`
  width: 100%;
  min-height: calc(100vh - 60px);
  padding: 20px;
  background-color: #f5f5f5;
  margin-top: 60px;
`;

const Content = styled.div`
    max-width: 1400px;

  margin: 0 auto;
  width: 100%;
`;

const BackButton = styled.button`
  padding: 8px 16px;
  background: #007bff;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  margin-bottom: 20px;
  font-size: 1rem;

  @media (max-width: 768px) {
    padding: 6px 12px;
    font-size: 0.9rem;
  }
`;

const MovieContainer = styled.div`
  display: grid;
  grid-template-columns: 300px 1fr;
  gap: 20px;
  background: white;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 15px;
  }
`;

const Poster = styled.img`
  width: 100%;
  border-radius: 8px;
  height: auto;
  max-width: 300px;
  margin: 0 auto;
  display: block;

  @media (max-width: 768px) {
    max-width: 250px;
  }
`;

const Info = styled.div`
  h1 {
    margin: 0 0 16px 0;
    color: #333;
    font-size: 2rem;

    @media (max-width: 768px) {
      font-size: 1.5rem;
    }
  }

  p {
    line-height: 1.6;
    color: #666;
    font-size: 1.1rem;

    @media (max-width: 768px) {
      font-size: 1rem;
    }
  }
`;

const Rating = styled.div`
  font-size: 1.2rem;
  color: #f5c518;
  font-weight: bold;
  margin: 16px 0;

  @media (max-width: 768px) {
    font-size: 1.1rem;
  }
`;

const ReleaseDate = styled.div`
  color: #666;
  margin-bottom: 16px;
  font-size: 1.1rem;

  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;

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