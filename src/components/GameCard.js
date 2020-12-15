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
    <Card id="game-card">
      <div>
        <img id="game-img" src={props.game.image.super_url} />
      </div>
      <div id="game-info">
        <h2>{props.game.name}</h2>
        <p>Release Date : {props.game.original_release_date}</p>
        <h4>overview</h4>
        <p> {props.game.deck} </p>

        <button onClick={addToSet}>ADD TO SUPER SET</button>
      </div>
    </Card>
  )
}

export default GameCard
