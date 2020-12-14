const url = `http://localhost:4000/api/v1/game`


class allGameModel {
  static all = () => {
    return fetch(`${url}/all`)
  }
}
export default allGameModel
