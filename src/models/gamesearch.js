const url = `http://localhost:4000/api/v1/game/search`


class gameSearchModel {
  static all = (searchInput) => {
    console.log('gamessearch',searchInput)
    // fetch(`${apiUrl}${searchInput}`,{
    fetch(`${url}/?q=${searchInput}`,{
    })
    .then(res => {
      console.log('success')
      // console.log(res)
      res.json().then((result)=>{console.log(result)})
    })
    
  }
}

export default gameSearchModel
