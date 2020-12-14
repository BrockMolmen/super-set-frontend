import {useState, useEffect} from "react"
import allGameModel from "../models/allGames"

const useGames = () => {
  const [games, setGames] = useState ([])

  const fetchGames = () => {
    allGameModel.all().then(data => {
      setGames( data.games )
    })
  }

  useEffect(() => {
    fetchGames();
  }, [])

  // return state and our updater function
  return [games, fetchGames]
}

export default useGames