import React, { useState } from 'react'

const Search = (props) => {
  const { searchMovies = Function.prototype } = props

  const [search, setSearch] = useState('')
  const [type, setType] = useState('')

  const handleKey = (event) => {
    if (event.key === 'Enter') {
      searchMovies(search, type)
    }
  }
  const handleFilter = (event) => {
    setType(event.target.dataset.type)
    searchMovies(search, event.target.dataset.type)
  }

  return (
    <div className="row">
      <div className="col s12">
        <div className="input-field ">
          <input
            placeholder="search"
            id="search"
            type="search"
            className="validate "
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            onKeyDown={handleKey}
          />
          <label className="hide">Search</label>
          <button
            className="btn search-btn purple darken-1"
            onClick={() => searchMovies(search, type)}
          >
            Search
          </button>

          <div className="radio-search-types">
            <label>
              <input
                className="with-gap checkbox-purple"
                name="type"
                type="radio"
                data-type="all"
                onChange={handleFilter}
                checked={type === 'all'}
              />
              <span>All</span>
            </label>
            <label>
              <input
                className="with-gap checkbox-purple"
                name="type"
                type="radio"
                data-type="movie"
                onChange={handleFilter}
                checked={type === 'movie'}
              />
              <span>Movies only</span>
            </label>
            <label>
              <input
                className="with-gap checkbox-purple"
                name="type"
                type="radio"
                data-type="series"
                onChange={handleFilter}
                checked={type === 'series'}
              />
              <span>Series only</span>
            </label>
            <label>
              <input
                className="with-gap checkbox-purple"
                name="type"
                type="radio"
                data-type="episode"
                onChange={handleFilter}
                checked={type === 'episode'}
              />
              <span>Episode only</span>
            </label>
          </div>
        </div>
      </div>
    </div>
  )
}

export { Search }
