const url = `http://localhost:4000/api/v1/game/search`
const apiUrl = `https://www.giantbomb.com/api/search/?api_key=193eb6224623fc6236f58655173df88e82541b3a&query=`


class gameSearchModel {
  static all = (searchInput) => {
    console.log(searchInput)
    fetch(`${apiUrl}${searchInput}`,{
    headers: {
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": apiUrl | "*",
      "Access-Control-Allow-Methods": "POST"
      },
    })
    .then(res => {
      console.log('success')
      console.log(res)
      res.json().then((result)=>{console.log(res, result)})
    })
    
  }
}

export default gameSearchModel
