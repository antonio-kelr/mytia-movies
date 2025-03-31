import { api } from './config/axios';

export const getPopularMovies = (page: number = 1) => api.get('/movie/popular', { params: { page } });
export const searchMovies = (query: string) => api.get('/search/movie', { params: { query } });
export const getMovieDetails = (movieId: number) => api.get(`/movie/${movieId}`);