const url = `http://localhost:4000/api/v1/superset`
const userId = localStorage.getItem('id')


class supersetModel {

  static findSet = (guid) => {
    return fetch(`${url}/${guid}`)
    .then(res => res.json())
  }

  static delete = (props) => {
    console.log(props)
    return fetch(`${url}/${userId}/${props.guid}`, {
      method: 'DELETE',
      headers: {
          "Content-Type": "application/json"
      },
      body: JSON.stringify({userId})
  }).then(res => res.json())
  }

}
export default supersetModel