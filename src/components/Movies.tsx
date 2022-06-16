import  MovieItem from './MovieItem'
import type { Movie } from '../types'
import './Movie.scss'

const Movies = ({ movies }: { movies: Movie[] }) => {
  return (
    <div className='movies'>
        { movies.map((movie, i) => i < 4 ? <MovieItem movie={movie} /> : null)}
    </div>
  )
}

export default Movies
