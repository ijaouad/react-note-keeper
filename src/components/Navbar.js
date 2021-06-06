import React from 'react'

export const Navbar = () => {
    return (
        <nav className="navbar is-white px-6 is-hovered" role="navigation" aria-label="main navigation">

        <div className="navbar-brand">
          <a className="navbar-item" href="/">
            <span className="logo" >
                <i className="fab fa-react"/> React Note Keeper
            </span>
          </a>
        </div>

    </nav>
    )
}
