import { describe, it, expect, vi, beforeEach } from 'vitest';
import type { Movie, MovieResponse } from '../types/movie';
import { getMovieDetails, getPopularMovies, searchMovies } from './movie.service';
import { api } from './config/axios';

// Mock do módulo de configuração do axios
vi.mock('./config/axios', () => ({
  api: {
    get: vi.fn()
  }
}));

describe('Movie Service', () => {
  const mockMovieResponse: MovieResponse = {
    results: [
      {
        id: 1,
        title: 'Test Movie',
        overview: 'Test Overview',
        poster_path: '/test-path.jpg',
        backdrop_path: '/backdrop-path.jpg',
        release_date: '2024-01-01',
        vote_average: 8.5,
        vote_count: 1000,
      },
    ],
    page: 1,
    total_pages: 1,
    total_results: 1,
  };

  const mockMovieDetail: Movie = mockMovieResponse.results[0];

  beforeEach(() => {
    vi.clearAllMocks();
  });

  describe('getPopularMovies', () => {
    it('deve buscar filmes populares com página padrão', async () => {
      api.get = vi.fn().mockResolvedValue({ data: mockMovieResponse });

      const response = await getPopularMovies();
      
      expect(api.get).toHaveBeenCalledWith('/movie/popular', { params: { page: 1 } });
      expect(response.data).toEqual(mockMovieResponse);
      expect(response.data.results).toHaveLength(1);
    });

    it('deve buscar filmes populares com página específica', async () => {
      api.get = vi.fn().mockResolvedValue({ data: mockMovieResponse });
      const page = 2;

      const response = await getPopularMovies(page);
      
      expect(api.get).toHaveBeenCalledWith('/movie/popular', { params: { page: 2 } });
      expect(response.data).toEqual(mockMovieResponse);
    });

    it('deve lidar com erros da API', async () => {
      const errorMessage = 'Erro ao buscar filmes populares';
      api.get = vi.fn().mockRejectedValue(new Error(errorMessage));

      await expect(getPopularMovies()).rejects.toThrow(errorMessage);
      expect(api.get).toHaveBeenCalledWith('/movie/popular', { params: { page: 1 } });
    });
  });

  describe('searchMovies', () => {
    it('deve buscar filmes com parâmetro de busca', async () => {
      api.get = vi.fn().mockResolvedValue({ data: mockMovieResponse });
      const query = 'test movie';

      const response = await searchMovies(query);

      expect(api.get).toHaveBeenCalledWith('/search/movie', { params: { query } });
      expect(response.data).toEqual(mockMovieResponse);
      expect(response.data.results[0].title).toBe('Test Movie');
    });

    it('deve retornar lista vazia para busca sem resultados', async () => {
      api.get = vi.fn().mockResolvedValue({ data: { ...mockMovieResponse, results: [] } });
      const query = 'filme inexistente';

      const response = await searchMovies(query);

      expect(api.get).toHaveBeenCalledWith('/search/movie', { params: { query } });
      expect(response.data.results).toHaveLength(0);
    });

    it('deve lidar com erros na busca', async () => {
      const errorMessage = 'Erro na busca de filmes';
      api.get = vi.fn().mockRejectedValue(new Error(errorMessage));
      const query = 'test';

      await expect(searchMovies(query)).rejects.toThrow(errorMessage);
      expect(api.get).toHaveBeenCalledWith('/search/movie', { params: { query } });
    });
  });

  describe('getMovieDetails', () => {
    it('deve buscar detalhes do filme por ID', async () => {
      api.get = vi.fn().mockResolvedValue({ data: mockMovieDetail });
      const movieId = 1;

      const response = await getMovieDetails(movieId);

      expect(api.get).toHaveBeenCalledWith(`/movie/${movieId}`);
      expect(response.data).toEqual(mockMovieDetail);
      expect(response.data.id).toBe(movieId);
    });

    it('deve lidar com filme não encontrado', async () => {
      const errorMessage = 'Filme não encontrado';
      api.get = vi.fn().mockRejectedValue(new Error(errorMessage));
      const movieId = 999999;

      await expect(getMovieDetails(movieId)).rejects.toThrow(errorMessage);
      expect(api.get).toHaveBeenCalledWith(`/movie/${movieId}`);
    });

    it('deve validar a estrutura dos dados retornados', async () => {
      api.get = vi.fn().mockResolvedValue({ data: mockMovieDetail });
      const movieId = 1;

      const response = await getMovieDetails(movieId);
      
      expect(response.data).toHaveProperty('id');
      expect(response.data).toHaveProperty('title');
      expect(response.data).toHaveProperty('overview');
      expect(response.data).toHaveProperty('poster_path');
      expect(response.data).toHaveProperty('vote_average');
      expect(response.data).toHaveProperty('release_date');
    });
  });
});