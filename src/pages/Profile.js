import React, { useState, useEffect } from 'react'
import gameModel from '../models/game'
import { Link } from 'react-router-dom'
import SetCard from '../components/SetCard'
import UserModel from "../models/user"
const userId = localStorage.getItem('id')

const Profile = (props) => {
  const [userGames, setUserGames] = useState([])
  const [userInfo, setUserInfo] = useState(null)


  const fetchUserData = () => {
    UserModel.show().then(userData => {
      setUserInfo(userData.user.username)
      console.log(userData.user.username)
    })
  }

  useEffect(() => {
    getUserSet()
    fetchUserData()
  }, [])


  const getUserSet = () => {
    gameModel.find().then((games, index) => {
      setUserGames(games)
    })
  }

  const mapUserGames = () => {
    return userGames.map((game, index) => (
      <SetCard game={game} key={game.guid} />
    ))
  }



  return (
    <div className="center-stage">
      <div>
        <h1> HELLO {userInfo}  </h1>
        <Link className="edit-link editUserLink" to={`/user/${userId}`}>Edit Your Info</Link>
        {userGames ? mapUserGames() : "loading..."}
      </div>
    </div>
  )
}

export default Profile
