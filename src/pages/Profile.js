import React, { useState, useEffect }  from 'react'
import gameModel from '../models/game'
// import {Link} from 'react-router-dom'
import SetCard from '../components/SetCard'
import UserModel from "../models/user"


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
      // console.log(games)
      <SetCard game={game} key={game.guid} />
    ))
  }
  // const generatedUserBenList = () => {
  //   return userBenefits.map((userBenefit, index) => (
  //     <Col xs={4} key={userBenefit.id} >
  //       <UserBenefitCard userBenefit={userBenefit} key={userBenefit.id} />
  //     </Col>
  //   ))
  // }
  
  
  return (
    <div>
    <h1> hello {userInfo}  </h1>
      {userGames ? mapUserGames() : "loading..."}
    </div>
  )
}

export default Profile
