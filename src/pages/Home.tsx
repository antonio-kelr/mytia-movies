import { useState } from 'react';
import styled from 'styled-components';
import { MovieCard } from '../components/MovieCard';
import { MovieCarousel } from '../components/MovieCarousel';
import { useMovies } from '../hooks/useMovies';
import { Paginator } from 'primereact/paginator';
import "primereact/resources/themes/lara-light-indigo/theme.css";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";

const Container = styled.div`
  width: 100%;
  min-height: calc(100vh - 60px);
  padding: 20px;
  background-color: #f5f5f5;
  margin-top: 60px;
`;

const Content = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  width: 100%;
`;

const Section = styled.section`
  margin-bottom: 40px;
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

export const Home = () => {
  const [searchPage, setSearchPage] = useState(0);
  const [popularPage, setPopularPage] = useState(0);
  const [searchQuery, setSearchQuery] = useState('');
  
  const { movies: searchResults, loading: searchLoading, error: searchError, totalPages: searchTotalPages } = useMovies(searchPage + 1, searchQuery);
  const { movies: popularMovies, loading: popularLoading, error: popularError, totalPages: popularTotalPages } = useMovies(popularPage + 1);

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
    setSearchPage(0);
  };

  if (searchLoading || popularLoading) return <div>Carregando...</div>;
  if (searchError || popularError) return <div>Erro ao carregar os filmes</div>;

  return (
    <Container>
      <Content>
        <SearchInput
          type="text"
          placeholder="Buscar filmes..."
          value={searchQuery}
          onChange={handleSearch}
        />

        <Section>
          <Title>Filmes Populares</Title>
          <MovieCarousel movies={popularMovies} />
          <PaginationContainer>
            <Paginator
              first={popularPage * 20}
              rows={20}
              totalRecords={popularTotalPages * 20}
              onPageChange={(e) => setPopularPage(e.page)}
              template="FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink"
            />
          </PaginationContainer>
        </Section>

        <Section>
          <Title>Resultados da Busca</Title>
          <Grid>
            {searchResults.map(movie => (
              <MovieCard key={movie.id} movie={movie} />
            ))}
          </Grid>

          <PaginationContainer>
            <Paginator
              first={searchPage * 20}
              rows={20}
              totalRecords={searchTotalPages * 20}
              onPageChange={(e) => setSearchPage(e.page)}
              template="FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink"
            />
          </PaginationContainer>
        </Section>
      </Content>
    </Container>
  );
}; 