const url = `http://localhost:4000/api/v1/game`

const userId2 = localStorage.getItem('id')


class gameModel {
  static all = () => {
    return fetch(`${url}/all`)
    .then(res => res.json())
  }

  static create = (name, guid, userId) => {
    return fetch(`${url}/all`, {
      method: "POST",
      headers: {
        "content-Type": "application/json"
      },
      body: JSON.stringify({name, guid, userId})
    })
    .then(res => res.json())
  }

  static find = () => {
    return fetch(`${url}/${userId2}`)
    .then(res => res.json())
  }

}
export default gameModel
