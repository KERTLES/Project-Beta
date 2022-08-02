function ListModels(props) {
  return (
    <table className="table table-striped">
      <thead>
        <tr>
          <th>Name</th>
          <th>Manufacturer</th>
          <th>Picture</th>
        </tr>
      </thead>
      <tbody>
        {props.models.map((model) => {
          
          return (
            
            <tr>
              <td>{model.name}</td>
              <td>{model.manufacturer.name}</td>
              <td>
                {" "}
                <img src={model.picture_url} alt="car" />
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}

export default ListModels;
