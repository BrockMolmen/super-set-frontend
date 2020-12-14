import React from 'react' // { useState, useEffect } 
// import {Link} from 'react-router-dom'

// import UserModel from "../models/user"

const Profile = (props) => {
  // const [userBenefits, setUserBenefits] = useState([])
  // const [userInfo, setUserInfo] = useState(null)
  // const [userId, setUserId] = useState(null)

  // const fetchUserData = () => {
  //   UserModel.all().then(data => {
  //     setUserInfo(data.userBenefits[0].firstName)
  //     setUserId(data.userBenefits[0].id)
  //   })
  // }

  // useEffect(() => {
  //   fetchUserData()
  // }, [])

  // const generatedUserBenList = () => {
  //   return userBenefits.map((userBenefit, index) => (
  //     <Col xs={4} key={userBenefit.id} >
  //       <UserBenefitCard userBenefit={userBenefit} key={userBenefit.id} />
  //     </Col>
  //   ))
  // }
  
  
  return (
    <div>
      {/* <Link className="teasLink editUserLink" to={`/user/${userId}`}>Edit Your Info</Link> */}
      <h1>Hello { props.currentUser }</h1>
      <p>username</p>
      <p>set total</p>
      <p>number of games</p>
      <p>list of set</p>
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
