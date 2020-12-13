import React, {useState, useEffect} from 'react';
import { Link } from 'react-router-dom'
import './Header.scss'
import gameSearchModel from '../models/gamesearch'

const Header = (props) => {
  const [searchInput, setSearchInput] = useState("")

  const HandelChangeInput = (event) => {
    event.preventDefault()
    gameSearchModel.all(searchInput)
      console.log(searchInput)
      // setSearchInput( data.results)
    }

  return (
    <header>
      <div className="logo">
        <Link to={'/'}>Home!</Link>
      </div>
        <form className="searchbar" action="search" method="get">
          <input 
            type="text"
            value={searchInput}
            onChange={e => setSearchInput(e.target.value)}
            placeholder="Search for Games"
            /> 
          <button onClick={HandelChangeInput}>SEARCH</button>
        </form>
      <div className="links">
        <ul>
          { props.currentUser ? 
            <>
              <li><Link to={'/profile'}>Profile</Link></li>
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
