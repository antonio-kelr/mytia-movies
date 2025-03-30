import { useState } from "react";
import { MovieCard } from "../components/MovieCard";
import { MovieCarousel } from "../components/MovieCarousel";
import { useMovies } from "../hooks/useMovies";
import { Paginator } from "primereact/paginator";
import { Container, Content, Section, Title, Grid, PaginationContainer } from "../styles/pages/Home.styles";
import "primereact/resources/themes/lara-light-indigo/theme.css";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";

export const Home = () => {
  const [searchPage, setSearchPage] = useState(0);
  const [popularPage, setPopularPage] = useState(0);

  const {
    movies: searchResults,
    loading: searchLoading,
    error: searchError,
    totalPages: searchTotalPages,
  } = useMovies(searchPage + 1);
  const {
    movies: popularMovies,
    loading: popularLoading,
    error: popularError,
    totalPages: popularTotalPages,
  } = useMovies(popularPage + 1);

  if (searchLoading || popularLoading) return <div>Carregando...</div>;
  if (searchError || popularError) return <div>Erro ao carregar os filmes</div>;

  return (
    <Container>
      <Content>
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

          <Title>Filmes em Destaque</Title>
          <Grid>
            {searchResults.map((movie) => (
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
