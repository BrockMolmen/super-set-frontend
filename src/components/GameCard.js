import React from 'react'
import {useHistory} from "react-router-dom"
import gameModel from '../models/game'
import {Card} from 'reactstrap'

const GameCard = (props) => {
  let history = useHistory()


  const addToSet = () => {
    const userId = localStorage.getItem('id')
    gameModel.create(props.game.name, props.game.guid, userId).then(data => history.push('/profile'))
  }

  return (
    <Card className="game-card">
      <div>
        <img className="game-img" src={props.game.image.super_url} />
      </div>
      <div className="game-info">
        <h2 className="game-name">{props.game.name}</h2>
        <p className="game-date">Release Date : {props.game.original_release_date}</p>
        <h3>overview</h3>
        <p> {props.game.deck} </p>

        <button className="gbl-button" onClick={addToSet}>ADD TO SUPER SET</button>
      </div>
    </Card>
  )
}

export default GameCard
