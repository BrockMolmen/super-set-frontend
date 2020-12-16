import React, { useState, useEffect } from 'react'
import UserEditModel from '../models/userEdit'
import UserCard from '../components/UserCard'

function User() {
    const [foundUser, setFoundUser] = useState()

    useEffect(() => {
        findUser()
    }, [])


    const findUser = () => {
        UserEditModel.show(foundUser).then(data => {
            setFoundUser(data.user)
        })
    }
    
    return (
        <div>
            <UserCard user={foundUser} />
        </div>
    )
}

export default User
