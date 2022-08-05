import React from "react";

function toString(num) {
    let numbers = Number(num).toLocaleString()
    return numbers

}

class ListSales extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            sales: []
        }
    }

    async componentDidMount() {
        const url = 'http://localhost:8090/api/sales/';
        const response = await fetch(url);
        if (response.ok) {
            const data = await response.json();

            this.setState({ sales: data["sales_record"] })
        }
    }




    render() {
        return (
            <>
                <h2>Sales History</h2>
                <table className="table table-striped">
                    <thead>
                        <tr>
                            <th>Sales Person</th>
                            <th>Employee number</th>
                            <th>Purchaser Name</th>
                            <th>VIN</th>
                            <th>Sale Price</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.sales?.map(sale => {
                            return (
                                <tr key={sale.vin.vin}>
                                    <td>{sale.sales_person.name}</td>
                                    <td>{sale.sales_person.employee_number}</td>
                                    <td>{sale.customer.name}</td>
                                    <td>{sale.vin.vin}</td>

                                    <td>{`$${toString(sale.price)}`}</td>

                                </tr>
                            );
                        })}
                    </tbody>
                </table>
            </>
        );
    }
}
export default ListSales;