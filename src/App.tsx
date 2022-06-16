import { useEffect, useState } from 'react';
import './App.scss';
import type { Movie } from './types';
import Movies from './components/Movies';

const BASE_URL = 'https://gist.githubusercontent.com/bjinwright/b7a6668aed2df7d1fa14a4bd4e9e61ef/raw/aaa5a7e128a7db036249f7d06c5fd36a25c9894d/movie_db.json';

function App() {
  const [movies, setMovies] = useState<Movie[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(BASE_URL);
        const data = await response.json();
        setMovies(data);
      } catch (error) {
        console.error(error);
      }
    }
    fetchData();
  }, [])

  return (
    <>
      <header className="header">Movies</header>
      <h2 className="header-sub">In Theaters</h2>
      <button className='seeAllBtn'>See All</button>
      <main className="container">
          <Movies movies={movies} />
      </main>
    </>
  );
}

export default App;
