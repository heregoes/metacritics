import type { Movie } from '../types'
const blankImageLink = 'https://via.placeholder.com/300x450'

const MovieItem = ({ movie }: { movie: Movie }) => {

  const imgError = (e: any) => {
    e.target.src = blankImageLink
  }

  return (
    <section className='movie'>
      <img className='movie-poster' src={movie.poster} onError={imgError} alt={movie.title} />
      <div className='movie-rating'>
        {movie.imdb_rating }
        <span>meta</span>
      </div>
      <div className="movie-info">
        <a className='movie-title' href={`${movie.website}`} target='_blank'>
          {movie.title}
        </a>
        <div className='movie-time'>
          <div>Year: {movie.year}</div>
          <div>Run Time: {movie.runtime}</div>
        </div>
        <div className='movie-plot'>{movie.plot}</div>
      </div>
    </section>
  )
}

export default MovieItem