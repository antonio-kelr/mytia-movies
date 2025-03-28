import { useState, useEffect } from 'react';
import api from '../services/api';
import { Movie, MovieResponse } from '../types/movie';

export const useMovies = (page: number = 1, searchQuery: string = '') => {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [totalPages, setTotalPages] = useState(0);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        setLoading(true);
        const endpoint = searchQuery ? '/search/movie' : '/movie/popular';
        const response = await api.get<MovieResponse>(endpoint, {
          params: {
            page,
            query: searchQuery
          }
        });
        
        setMovies(response.data.results);
        setTotalPages(response.data.total_pages);
        setError(null);
      } catch (err) {
        setError('Erro ao carregar os filmes');
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchMovies();
  }, [page, searchQuery]);

  return { movies, loading, error, totalPages };
}; 