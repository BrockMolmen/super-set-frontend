import {useState, useEffect} from "react"
import allGameModel from "../models/game"

const useGames = () => {
  const [games, setGames] = useState ([])

  const fetchGames = () => {
    allGameModel.all().then(data => {
      setGames( data.results )
    })
  }
  useEffect(() => {
    fetchGames();
  }, [])


  return [games, fetchGames]
}

export default useGames