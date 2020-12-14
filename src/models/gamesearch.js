const url = `http://localhost:4000/api/v1/game/search`
// const apiUrl = `https://www.giantbomb.com/api/search/?api_key=193eb6224623fc6236f58655173df88e82541b3a&format=json&query=`


class gameSearchModel {
  static all = (searchInput) => {
    console.log('gamessearch',searchInput)
    // fetch(`${apiUrl}${searchInput}`,{
    fetch(`${url}/?q=${searchInput}`,{
    // headers: {
    //   "Content-Type": "application/json",
    //   "Access-Control-Allow-Origin": url | "*",
    //   },
    })
    .then(res => {
      console.log('success')
      console.log(res)
      // res.json().then((result)=>{console.log(res, result)})
    })
    
  }
}

export default gameSearchModel
