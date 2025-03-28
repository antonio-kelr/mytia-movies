import { createBrowserRouter } from 'react-router-dom';
import { Layout } from './components/Layout';
import { Home } from './pages/Home';
import { Movies } from './pages/Movies';
import { PopularMovies } from './pages/PopularMovies';
import { MovieDetails } from './pages/MovieDetails';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout><Home /></Layout>,
  },
  {
    path: '/movies',
    element: <Layout><Movies /></Layout>,
  },
  {
    path: '/popular',
    element: <Layout><PopularMovies /></Layout>,
  },
  {
    path: '/movie/:id',
    element: <Layout><MovieDetails /></Layout>,
  },
]); 