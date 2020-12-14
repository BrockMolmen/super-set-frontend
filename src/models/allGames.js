const url = `http://localhost:4000/api/v1/game`


class GameModel {
  static all = () => {
    return fetch(`${url}/all`)
  }
}
export default GameModel
