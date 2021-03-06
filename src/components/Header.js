import React, {useState} from 'react';
import { Link } from 'react-router-dom'
import './Header.scss'
import gameSearchModel from '../models/gamesearch'

const userId = localStorage.getItem('id')

const Header = (props) => {
  const [searchInput, setSearchInput] = useState("")
  // const [searchResults, setSearchResults] = useState([])

  const HandelChangeInput = (event) => {
    event.preventDefault()
    gameSearchModel.all(searchInput)
    }

  return (
    <header className="snes-it">
      <div className="logo">
      <ul>
        <li><Link to={'/game/all'}>SNES</Link></li>
      </ul>
      </div>
        <form className="searchbar">
          <input 
            type="text"
            value={searchInput}
            onChange={e => setSearchInput(e.target.value)}
            placeholder="Search for Games - Coming Soon"
            /> 
          <Link to="/game/search" className="btn-search" onClick={HandelChangeInput} > SEARCH </Link>
        </form>
      <div className="links">
        <ul>
          { props.currentUser ? 
            <>

              <li><Link to={`/profile`}>My Set</Link></li>
              <li><a href="/logout" onClick={ props.logout }>Log Out</a></li>
            </>
          :
            <>
              <li><Link to={'/register'}>Register</Link></li>
              <li><Link to={'/login'}>Login</Link></li>
            </>
          }
        </ul>
      </div>
    </header>
  );
}

export default Header;
