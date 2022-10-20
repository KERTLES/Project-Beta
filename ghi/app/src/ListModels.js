import React from "react";

class ListModels extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      models: []
    }
  }

  async componentDidMount() {
    const url = 'http://localhost:8100/api/models/';
    const response = await fetch(url);
    if (response.ok) {
      const data = await response.json();
      this.setState({ models: data.models })
    }
  }


  render() {
    return (
      <>
      <h2>Vehicle models</h2>
      <table className="table table-striped">
      <thead>
        <tr>
          <th>Name</th>
          <th>Manufacturer</th>
          <th>Picture</th>
        </tr>
      </thead>
      <tbody>
        {this.state.models.map(model => {
          return (
            <tr key={model.id}>
              <td>{ model.name }</td>
              <td>{ model.manufacturer.name}</td>
              <td><img src={model.picture_url} alt="car" width="200" /></td>
            </tr>
          );
        })}
      </tbody>
    </table>
    </>
    );
  }
}
export default ListModels;
