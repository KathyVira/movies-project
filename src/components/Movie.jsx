import React from 'react'

function Movie(props) {
  const {
    Title: title,
    Year: year,
    imdbID: id,
    Type: type,
    Poster: poster,
  } = props

  return (
    <div className=" movie col s12 m6" id={id}>
      <div className="card ">
        <div className="card-image">
          {poster === 'N/A' ? (
            <img
              alt={title}
              src={`https://via.placeholder.com/300x400?text=${title}`}
            />
          ) : (
            <img alt="poster" src={poster} />
          )}
          {/* <span className="card-title">{title}</span> */}
          <a className="btn-floating halfway-fab waves-effect waves-light red">
            <i alt="" className="material-icons purple">
              sentiment_very_satisfied
            </i>
          </a>
        </div>
        <div className="card-content">
          <p>
            <span className="">{title}</span>
          </p>
          <p className="left">{year}</p>
          <p className="right">{type}</p>
        </div>
      </div>
    </div>
  )
}

export default Movie
