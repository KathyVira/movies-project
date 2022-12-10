import React from 'react'

function Header() {
  return (
    <>
      <nav className="purple darken-4">
        <div className="nav-wrapper ">
          <a href="#" className="brand-logo">
            React Search Movies
          </a>
          <ul id="nav-mobile" className="right hide-on-med-and-down">
            <li>
              <a href="https://kathyvira.com">Repo</a>
            </li>
          </ul>
        </div>
      </nav>
    </>
  )
}

export default Header
