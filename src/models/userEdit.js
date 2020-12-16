const REACT_APP_API_URL = "http://localhost:4000/api/v1"
const userId = localStorage.getItem('id')


class UserEditModel {

    static all = () => {
        // Calling the index method in the API controller
        return fetch(`${REACT_APP_API_URL}/user`).then(res => res.json())
    }


    static show = () => {
        return fetch(`${REACT_APP_API_URL}/user/${userId}`).then(res => res.json())
    }

    static update = (data) => {
        return fetch(`${REACT_APP_API_URL}/user/${userId}`, {
            method: 'PUT',
            headers: {
                "Content-Type": "application/json"
            },
            credentials: 'include',
            body: JSON.stringify(data)
        }).then(res => res.json())
    }
}


export default UserEditModel;