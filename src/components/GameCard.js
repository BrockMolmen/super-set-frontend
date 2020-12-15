import React from 'react'

const GameCard = (props) => {


  return (
    <div id="game-card">
      <div>
        <img id="game-img" src={props.game.image.super_url} />
      </div>
      <div id="game-info">
        <h2>{props.game.name}</h2>
        <p>Release Date : {props.game.original_release_date}</p>
        <h4>overview</h4>
        <p> {props.game.deck} </p>

        <p>Add to set</p>
      </div>
    </div>
  )
}

export default GameCard
