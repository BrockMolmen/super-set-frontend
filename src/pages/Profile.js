import React, { useState, useEffect }  from 'react'
// import {Link} from 'react-router-dom'

import UserModel from "../models/user"
const userId = localStorage.getItem('id')

const Profile = (props) => {
  // const [userBenefits, setUserBenefits] = useState([])
  const [userInfo, setUserInfo] = useState(null)


  const fetchUserData = () => {
    UserModel.show().then(userData => {
      setUserInfo(userData.user.username)
      console.log(userData.user.username)
    })
  }

  useEffect(() => {
    fetchUserData()
    
  }, [])

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
      {/* <Link className="teasLink editUserLink" to={`/user/${userId}`}>Edit Your Info</Link> */}

      {/* { userBenefits.length ?
        <Container fluid>
          <Row>
            {
              generatedUserBenList()
            }
          </Row>
        </Container>
        : "No benefits saved"} */}
    </div>
  )
}

export default Profile
