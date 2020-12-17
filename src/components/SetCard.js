import React, {useState, useEffect}  from 'react'
import {useHistory} from "react-router-dom"
import supersetModel from '../models/superset'
import {Card} from 'reactstrap'

const SetCard = (props) => {
  const [gameDetail, setGameDetail] = useState(null)


  const getDetails = () => {
    supersetModel.findSet(props.game.guid)
    .then(data => {
      setGameDetail( data )
    }
    )
  }

  
  
  useEffect(() => {
    getDetails()
  }, [])
 
  const deleteGame = () => {
    supersetModel.delete(props.game).then(window.location.reload())
  }


  return (
    <Card className="game-card">
      <div>
      {gameDetail ? <img className="game-img" src={gameDetail.image.super_url} /> : "no image"} 
      </div>
      <div className="game-info">
        <h2 className="game-name">{props.game.name}</h2>
        {gameDetail ? <p className="game-date"> {gameDetail.original_release_date}  </p> : "..."}
        <h3 className="game-label">overview</h3>
        {gameDetail ? <p className="game-deck"> {gameDetail.deck}  </p> : "..."}
        <button className="gbl-button" onClick={deleteGame}>REMOVE FROM SET</button>
      </div>
    </Card>
  )
}

export default SetCard
