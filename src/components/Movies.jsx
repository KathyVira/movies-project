import React from 'react'
import Movie from './Movie'
import NothingFound from './NothingFound'

function Movies(props) {
  const { movies = [] } = props
  return (
    <div className="movies">
      {movies.length ? (
        movies.map((movie) => <Movie key={movie.imdbID} {...movie} />)
      ) : (
        <NothingFound />
      )}
    </div>
  )
}

export { Movies }
