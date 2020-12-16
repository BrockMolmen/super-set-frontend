import React, {useState, useEffect}  from 'react'
import {useHistory} from "react-router-dom"
import supersetModel from '../models/superset'
import {Card} from 'reactstrap'

const GameCard = (props) => {
  const [gameDetail, setGameDetail] = useState([])
  console.log(props)

  const getDetails = () => {
    supersetModel.findSet(props.game.guid)
    // .then(data => {
    //   setGameDetail( data.results )
    }
    // )
  // }

  useEffect(() => {
    getDetails()
  }, [])

  return (
    <Card id="game-card">
      <div>
        {/* <img id="game-img" src={props.game.image.super_url} /> */}
      </div>
      <div id="game-info">
        <h2>{props.game.name}</h2>
        {/* <p>Release Date : {props.game.original_release_date}</p> */}
        <h4>overview</h4>
        {/* <p> {props.game.deck} </p> */}
      </div>
    </Card>
  )
}

export default GameCard
