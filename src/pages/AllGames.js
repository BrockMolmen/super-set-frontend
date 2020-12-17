import React from 'react'
import { useEffect, useState } from 'react'
import GameCard from '../components/GameCard'

import useGames from '../hooks/useGames'

const AllGames = () => {
  const [games, fetchGames] = useGames('')


  const makeList = () => {
    return games.map((game, index) => (
        <GameCard game={game} key={game.guid} />
    ))
  }

  // const loadMore = () => {
  //   let offset = 100
  //   fetch.get(`https://www.giantbomb.com/api/games/?api_key=193eb6224623fc6236f58655173df88e82541b3a&format=json&platforms=9&offset=${offset}&filter=deck,api_detail_url,name,image,guid&sort=name:asc`)
  //   .then(res => fetchGames(res.json()))
  //   .then(offset => offset + 100)
  // }



  return (
    <div className="center-stage">
      <div>
        <h1>ALL SNES GAMES</h1>
        {games ? makeList() : "loading..."}  
        {/* <a onClick={loadMore}>LOAD MORE</a> */}
      </div>
    </div>
  )
}

export default AllGames
