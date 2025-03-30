import { useState, useEffect } from 'react';
import styled from 'styled-components';
import { MovieCard } from '../components/MovieCard';
import { useMovies } from '../hooks/useMovies';
import { Paginator } from 'primereact/paginator';
import { useSearchParams } from 'react-router-dom';
import "primereact/resources/themes/lara-light-indigo/theme.css";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";

const Container = styled.div`
  width: 100%;
  min-height: calc(100vh - 60px);
  padding: 20px;
    margin-top: 60px;

  background-color: #f5f5f5;
`;

const Content = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  width: 100%;
`;

const Section = styled.section`
  background: white;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const Title = styled.h2`
  color: #333;
  margin-bottom: 20px;
  font-size: 1.8rem;
  padding-bottom: 10px;
  border-bottom: 2px solid #f5c518;

  @media (max-width: 768px) {
    font-size: 1.5rem;
  }
`;

const SearchInput = styled.input`
  width: 100%;
  padding: 12px;
  font-size: 1.1rem;
  border: 2px solid #ddd;
  border-radius: 8px;
  margin-bottom: 20px;
  outline: none;

  &:focus {
    border-color: #007bff;
  }

  @media (max-width: 768px) {
    font-size: 1rem;
    padding: 10px;
  }
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 20px;
  width: 100%;

  @media (max-width: 768px) {
    grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
    gap: 15px;
  }
`;

const PaginationContainer = styled.div`
  margin-top: 20px;
  padding: 20px 0;
  display: flex;
  justify-content: center;

  .p-paginator {
    background: transparent;
    border: none;
    padding: 0;
  }

  .p-paginator .p-paginator-pages .p-paginator-page {
    min-width: 2.5rem;
    height: 2.5rem;
    margin: 0 0.2rem;
    border-radius: 4px;
    transition: all 0.2s;
  }

  .p-paginator .p-paginator-pages .p-paginator-page.p-highlight {
    background: #007bff;
    color: white;
  }

  .p-paginator .p-paginator-pages .p-paginator-page:not(.p-highlight):hover {
    background: #f8f9fa;
  }

  .p-paginator .p-paginator-first,
  .p-paginator .p-paginator-prev,
  .p-paginator .p-paginator-next,
  .p-paginator .p-paginator-last {
    min-width: 2.5rem;
    height: 2.5rem;
    margin: 0 0.2rem;
    border-radius: 4px;
    transition: all 0.2s;
  }

  .p-paginator .p-paginator-first:not(.p-disabled):hover,
  .p-paginator .p-paginator-prev:not(.p-disabled):hover,
  .p-paginator .p-paginator-next:not(.p-disabled):hover,
  .p-paginator .p-paginator-last:not(.p-disabled):hover {
    background: #f8f9fa;
  }

  .p-paginator .p-paginator-first.p-disabled,
  .p-paginator .p-paginator-prev.p-disabled,
  .p-paginator .p-paginator-next.p-disabled,
  .p-paginator .p-paginator-last.p-disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;

export const Movies = () => {
  const [page, setPage] = useState(0);
  const [searchParams] = useSearchParams();
  const searchQuery = searchParams.get('search') || '';
  const { movies, loading, error, totalPages } = useMovies(page + 1, searchQuery);

  useEffect(() => {
    setPage(0);
  }, [searchQuery]);

  if (loading) return <div>Carregando...</div>;
  if (error) return <div>Erro ao carregar os filmes</div>;

  return (
    <Container>
      <Content>
        <Section>
          <Title>{searchQuery ? `Resultados para: ${searchQuery}` : 'Filmes'}</Title>
          <SearchInput
            type="text"
            placeholder="Buscar filmes..."
            value={searchQuery}
          />
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