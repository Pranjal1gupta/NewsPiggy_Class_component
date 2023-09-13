import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export class Navbar extends Component {

  render() {
    return (
      <div>
                <nav class="navbar fixed-top navbar-expand-lg navbar-dark bg-dark">
        <Link class="navbar-brand" to="/">NewsPiggy</Link>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav mr-auto">
            <li class="nav-item">
                <Link class="nav-link" to="/">Home <span class="sr-only">(current)</span></Link>
            </li>
            <li class="nav-item"><Link class="nav-link" to="/Business">Business</Link></li>
            <li class="nav-item"><Link class="nav-link" to="/Entertainment">Entertainment</Link></li>
            <li class="nav-item"><Link class="nav-link" to="/General">General</Link></li>
            <li class="nav-item"><Link class="nav-link" to="/Health">Health</Link></li>
            <li class="nav-item"><Link class="nav-link" to="/Science">Science</Link></li>
            <li class="nav-item"><Link class="nav-link" to="/Sports">Sports</Link></li>
            <li class="nav-item"><Link class="nav-link" to="/Technology">Technology</Link></li>
            </ul>
            
        </div>
        </nav>
      </div>
    )
  }
}

export default Navbar
