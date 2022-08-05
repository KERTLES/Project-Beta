import React from "react";



function toString(num) {
    let numbers = Number(num).toLocaleString()
    return numbers

}

class SalesHistory extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            sales_persons: [],
            sales_person: '',
            search_results: [],
        }
        this.handleSalesPersonChange = this.handleSalesPersonChange.bind(this)

    }

    async componentDidMount() {
        const url = 'http://localhost:8090/api/salesmen/';
        const response = await fetch(url);
        if (response.ok) {
            const data = await response.json();

            this.setState({ sales_persons: data["sales person"] })
        }



    }

    async handleSalesPersonChange(event) {

        event.preventDefault();
        const id = event.target.value

        const url = `http://localhost:8090/api/sales/${id}/`


        const response = await fetch(url)
        const results = await response.json()

        this.setState({ search_results: results.sales_record })


    }

    render() {
        return (

            <div className="row" >

                <div className="offset-3 col-6">
                    <div className="shadow p-4 mt-4">
                        <h1>Sales Person History</h1>

                        <select onChange={this.handleSalesPersonChange} className="form-select" aria-label="Default select example">
                            <option >Select a name</option>
                            {this.state.sales_persons.map(sales_person => {
                                return (
                                    <option value={sales_person.id} key={sales_person.employee_number}>
                                        {sales_person.name}
                                    </option>
                                );
                            })}
                        </select>

                    </div>
                    <h2>Sales History</h2>
                    <table className="table table-striped">
                        <thead>
                            <tr>

                                <th>Sales Person</th>
                                <th>Customer</th>
                                <th>VIN</th>
                                <th>Sale Price</th>
                            </tr>
                        </thead>
                        <tbody>

                            {this.state.search_results.map(sale => {
                                return (
                                    <tr key={sale.vin.vin}>
                                        <td>{sale.sales_person.name}</td>
                                        <td>{sale.customer.name}</td>
                                        <td>{sale.vin.vin}</td>
                                        <td>{`${toString(sale.price)}`}</td>
                                    </tr>
                                );
                            }
                            )}
                        </tbody>
                    </table>
                </div>
            </div >
        )
    }

}
export default SalesHistory;








