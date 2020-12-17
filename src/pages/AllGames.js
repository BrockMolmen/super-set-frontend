import React from 'react'
import GameCard from '../components/GameCard'

import useGames from '../hooks/useGames'

const AllGames = () => {
  const [games, fetchGames] = useGames('')


  const makeList = () => {
    return games.map((game, index) => (
        <GameCard game={game} key={game.guid} />
    ))
  }



  return (
    <div className="center-stage">
      <div>
        <h1 className="page-title">ALL SNES GAMES</h1>
        {games ? makeList() : "loading..."}  
        {/* <a onClick={loadMore}>LOAD MORE</a> */}
      </div>
    </div>
  )
}

export default AllGames
