const url = `http://localhost:4000/api/v1/game`



class gameModel {
  static all = () => {
    return fetch(`${url}/all`)
    .then(res => res.json())
  }

  static create = (gameData, userId) => {
    console.log(gameData, userId)
    return fetch(`${url}/all`, {
      method: "POST",
      headers: {
        "content-Type": "application/json"
      },
      body: JSON.stringify({gameData, userId})
    })
    .then(res => res.json())
  }


}
export default gameModel
