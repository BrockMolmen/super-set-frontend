import React, {useState, useEffect}  from 'react'
import {useHistory} from "react-router-dom"
import supersetModel from '../models/superset'
import {Card} from 'reactstrap'

const GameCard = (props) => {
  const [gameDetail, setGameDetail] = useState(null)


  const getDetails = () => {
    supersetModel.findSet(props.game.guid)
    .then(data => {
      console.log(data)
      setGameDetail( data )
    }
    )
  }
  
  useEffect(() => {
    getDetails()
  }, [])
 
  return (
    <Card id="game-card">
      <div>
      {gameDetail ? <img id="game-img" src={gameDetail.image.super_url} /> : "no image"} 
      </div>
      <div id="game-info">
        <h2>{props.game.name}</h2>
        {gameDetail ? <p id="release-date"> {gameDetail.original_release_date}  </p> : "..."}
        <h4>overview</h4>
        {gameDetail ? <p id="release-date"> {gameDetail.deck}  </p> : "..."}
      </div>
    </Card>
  )
}

export default GameCard
