import React from 'react'
import GameCard from '../components/GameCard'


const Search = (props) => {
 console.log(props)

  return (
    <div>
      <h1>SEARCH</h1>
      {/* loop over search results to display a GameCard for each result that console === snes  //// 
      resources=games - results{i}.platforms[0].name==="Super Nintedo" */}
      <GameCard  />
    </div>
  )
}

export default Search
