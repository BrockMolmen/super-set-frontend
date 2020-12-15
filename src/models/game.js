const url = `http://localhost:4000/api/v1/game`



class gameModel {
  static all = () => {
    return fetch(`${url}/all`)
    .then(res => res.json())
  }

  static create = (name, guid, userId) => {
    console.log(name, guid, userId)
    return fetch(`${url}/all`, {
      method: "POST",
      headers: {
        "content-Type": "application/json"
      },
      body: JSON.stringify({name, guid, userId})
    })
    .then(res => res.json())
  }


}
export default gameModel
