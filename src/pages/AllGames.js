import React from 'react'
import { useEffect, useState } from 'react'
import GameCard from '../components/GameCard'
import gameModel from '../models/game'
import useGames from '../hooks/useGames'

const AllGames = () => {
  const [games, fetchGames] = useGames('')
  const [offset, setOffset] = useState('100')
  // const [allGames, setAllGames] = useState([])

  const makeList = () => {
    return games.map((game, index) => (
      
        <GameCard game={game} key={index} />
  
    ))
  }




  return (
    <div>
      <h1>AllGames</h1>
      {games ? makeList() : "loading..."}  
    </div>
  )
}

export default AllGames
