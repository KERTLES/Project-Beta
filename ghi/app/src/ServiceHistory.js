import {React, useState, useEffect} from "react";
// import './index.css';



function ServiceHistory(props){
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [items, setItems] = useState([]);

    const [filteredData, setFilteredData] = useState([]);
    
    const handleFilter = (event) => {
       const searchWord = event.target.value;
       const newFilter = items.filter((value) => {
            return value.vin.includes(searchWord);
       });
       setFilteredData(newFilter);
    };

    useEffect(() => {
        fetch("http://localhost:8080/api/appointments/")
            .then((res) => res.json())
            .then(
                (result) => {
                    setIsLoaded(true);
                    setItems(result);
                },
                (error) => {
                    setIsLoaded(true);
                    setError(error);
                }
            );
    }, []);
    

    return (
        <>
        <div className="container">
                <div className="row height d-flex justify-content-center align-items-top">
                    <div className="col-md-8">
                    <div className="search">
                        <i className="fa fa-search"></i>
                        <input type="text" className="form-control" placeholder="Enter VIN" onChange={handleFilter} />
                        <button className="btn btn-primary">Search VIN</button>
                    </div>
                    </div>
                </div>
        </div>
        {filteredData.length != 0 && (
        <table className="table table-striped">
      <thead>
        <tr>
          <th>Vin</th>
          <th>Customer name</th>
          <th>Date</th>
          <th>Time</th>
          <th>Technician</th>
          <th>Reason</th>
        </tr>
      </thead>
      <tbody>
        {filteredData.map(item => {
          return (
            <tr key={item.id}>
              <td>{ item.vin }</td>
              <td>{ item.customer }</td>
              <td>{ item.date }</td>
              <td>{ item.time }</td>
              <td>{ item.technician.name }</td>
              <td>{ item.reason }</td>
            </tr>
          );
        })}
      </tbody>
    </table>
    )}
    </>      
    );        
}

export default ServiceHistory;