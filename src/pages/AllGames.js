import React from 'react'
import { useEffect } from "react"
// import GameCard from '../components/GameCard'

import useGames from "../hooks/useGames"

const AllGames = () => {
  const [games] = useGames('')

  const getGames = () => {
    return games.map((game, index) => (
      console.log(game)
    // <div>
    //   <GameCard game={game} key={index} />
    // </div>
    // ))
    ))}

    useEffect(() => {
      getGames()
    }, [])

  return (
    <div>
      <h1>AllGames</h1>
      {/* {getGames()} */}
    </div>
  )
}

export default AllGames
