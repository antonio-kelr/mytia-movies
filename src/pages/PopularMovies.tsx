import { useState } from 'react';
import { MovieCard } from '../components/MovieCard';
import { useMovies } from '../hooks/useMovies';
import { Paginator } from 'primereact/paginator';
import { Container, Content, Section, Title, Grid, PaginationContainer } from '../styles/pages/MovieList.styles';
import "primereact/resources/themes/lara-light-indigo/theme.css";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";

export const PopularMovies = () => {
  const [page, setPage] = useState(0);
  const { movies, loading, error, totalPages } = useMovies(page + 1);

  if (loading) return <div>Carregando...</div>;
  if (error) return <div>Erro ao carregar os filmes</div>;

  return (
    <Container>
      <Content>
        <Section>
          <Title>Filmes Populares</Title>
          <Grid>
            {movies.map(movie => (
              <MovieCard key={movie.id} movie={movie} />
            ))}
          </Grid>

          <PaginationContainer>
            <Paginator
              first={page * 20}
              rows={20}
              totalRecords={totalPages * 20}
              onPageChange={(e) => setPage(e.page)}
              template="FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink"
            />
          </PaginationContainer>
        </Section>
      </Content>
    </Container>
  );
};