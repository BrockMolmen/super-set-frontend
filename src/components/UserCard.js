import React, { useEffect, useState } from 'react';
import UserEditModel from '../models/userEdit'
import {useHistory} from 'react-router-dom'


const UserCard = ({user}) => {
    const [newUsername, setNewUsername] = useState('');
    const [newEmail, setNewEmail] = useState('');

    const history = useHistory()

    useEffect(() => {
        if(user){
            setNewUsername(user.username);
            setNewEmail(user.email);
        }
    }, [user])

    const handleNewUsername = e => {
        setNewUsername(e.target.value)
    }
    const handleNewEmail = e => {
        setNewEmail(e.target.value)
    }
    const handleNewSubmit = e => {
        e.preventDefault()
            UserEditModel.update({
                username: newUsername,
                email: newEmail
            })
                .then(data => {
                    console.log('Successful update', data)
                    history.push('/profile')
                })
        }
    return (
        <div className="RegDiv">
            <h2>Update User Info</h2>
            <form onSubmit={handleNewSubmit}>
                <div className="form-group">
                    <label htmlFor="name">USERNAME:</label>
                    <input className="RegInputBox"
                        onChange={handleNewUsername}
                        value={newUsername}
                        type="text"
                        id="username"
                        name="username"
                        //placeholder
                        required
                    />
                </div>
                
                <div className="form-group">
                    <label htmlFor="name">EMAIL:</label>
                    <input className="RegInputBox"
                        onChange={handleNewEmail}
                        value={newEmail}
                        type="email"
                        id="email"
                        name="email"
                        //placeholder
                        required
                    />
                </div>
                <button type="submit">Update</button>
            </form>
        </div>
    )
}

export default UserCard;

