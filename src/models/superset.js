const url = `http://localhost:4000/api/v1/superset`



class supersetModel {

  static findSet = (guid) => {
    console.log(guid)
    return fetch(`${url}`)
  }

}
export default supersetModel