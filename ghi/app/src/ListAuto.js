



function ListAuto(props) {
    console.log(props.autos)



    return (

        <table className="table table-striped">
            <thead>
                <tr>
                    <th>Vin</th>
                    <th>Color</th>
                    <th>Year</th>
                    <th>Model</th>
                    <th>Manufacturer</th>

                </tr>
            </thead>
            <tbody>
                
                  {/* false */}
                  {props.autos?.map(automobile => {
                  

                    // read property of hats without checking for null 
                    return (
                       
                    
                        <tr>
                          
                            <td>{automobile.vin}</td>
                            <td>{automobile.color}</td>
                            <td>{automobile.year}</td>
                            <td>{automobile.model.name}</td>
                            <td>{automobile.model.manufacturer.name}</td>


                        </tr>
                    );
                })}



              

            </tbody>




        </table>

    )
}

export default ListAuto 