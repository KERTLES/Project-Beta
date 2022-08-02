function ManufacturerList(props) {
    console.log(props)
    return (
        <table className="table table-striped">
      <thead>
        <tr>
          <th>Name</th>
        </tr>
      </thead>
      <tbody>
        {props.manufacturers.map(manufacturer => {
          return (
            <tr key={manufacturer.id}>
              <td>{ manufacturer.name }</td>
            </tr>
          );
        })}
      </tbody>
    </table>
    );
}

export default ManufacturerList;