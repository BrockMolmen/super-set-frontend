const url = `http://localhost:4000/api/v1/game`


class gameModel {
  static all = () => {
    return fetch(`${url}/all`)
    .then(res => res.json())
  }
}
export default gameModel
