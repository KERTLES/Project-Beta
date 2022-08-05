import React, { Component } from "react"

class CreateSalesRecordForm extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            vins: [],
            vin: '',
            sales_persons: [],
            sales_person: '',
            customers: [],
            customer: '',
            price: '',

        }

        this.handleVinChange = this.handleVinChange.bind(this)
        this.handleSalesPersonChange = this.handleSalesPersonChange.bind(this)
        this.handleCustomerChange = this.handleCustomerChange.bind(this)
        this.handlePriceChange = this.handlePriceChange.bind(this)
        this.handleOnSubmit = this.handleOnSubmit.bind(this)
    }

    async componentDidMount() {
        const url = `http://localhost:8090/api/automobilevo/`
        const sales_personsUrl = `http://localhost:8090/api/salesmen/`;
        const customersUrl = `http://localhost:8090/api/customers/`;
        const response = await fetch(url)
        if (response.ok) {
            const data = await response.json();


            this.setState({ vins: data.automobiles })
        }


        const salesPersonResponse = await fetch(sales_personsUrl)
        if (salesPersonResponse.ok) {
            const data = await salesPersonResponse.json();


            this.setState({ sales_persons: data.sales_persons })
        }


        const customersResponse = await fetch(customersUrl)
        if (customersResponse.ok) {
            const data = await customersResponse.json();

            this.setState({ customers: data.constumers })
        }



    }

    handleVinChange(event) {
        const value = event.target.value;

        this.setState({ vin: value })
    }

    handleSalesPersonChange(event) {
        const value = event.target.value;


        this.setState({ sales_person: value })

    }

    handleCustomerChange(event) {
        const value = event.target.value;


        this.setState({ customer: value })

    }

    handlePriceChange(event) {
        const value = event.target.value


        this.setState({ price: value })
    }

    async handleOnSubmit(event) {
        event.preventDefault()

        const data = { ...this.state }

        delete data.vins
        delete data.sales_persons
        delete data.customers
        console.log(data)


        const url = `http://localhost:8090/api/sales/`

        const fetchConfig = {
            method: "post",
            body: JSON.stringify(data),
            headers: {
                'Content-Type': 'application/json',
            },


        }

        const response = await fetch(url, fetchConfig);
        if (response.ok) {
            const newSalesRecord = await response.json();
            console.log(newSalesRecord)
            const cleared = {
                vin: '',
                sales_person: '',
                customer: '',
                price: '',
            };

            this.setState(cleared);


        }
    }
    render() {
        return (
            <div className="row">
                <div className="offset-3 col-6">
                    <div className="shadow p-4 mt-4">
                        <h1>Record a new Sale</h1>
                        <form onSubmit={this.handleOnSubmit} id="create-auto-form">
                            <div className="mb-3">
                                <select onChange={this.handleVinChange} required name="vin" id="vin" className="form-select" value={this.state.vin}>
                                    <option value="">Choose an automobile</option>
                                    {this.state.vins.map(car => {

                                        return (

                                            <option key={car.vin} value={car.vin}>
                                                {car.name}

                                            </option>

                                        );
                                    })}
                                </select>
                            </div>
                            <div className="mb-3">

                                <select onChange={this.handleSalesPersonChange} required name="sales_person" id="sales_person" className="form-select" value={this.state.sales_person}>
                                    <option value="">Choose a sales person</option>
                                    {this.state.sales_persons.map(person => {

                                        return (

                                            <option key={person.id} value={person.id}>
                                                {person.name}

                                            </option>

                                        );
                                    })}
                                </select>
                            </div>

                            <div className="mb-3">

                                <select onChange={this.handleCustomerChange} required name="customer" id="customer" className="form-select" value={this.state.customer}>
                                    <option value="">Choose a Customer</option>
                                    {this.state.customers.map(person => {

                                        return (

                                            <option key={person.id} value={person.id}>
                                                {person.name}

                                            </option>

                                        );
                                    })}
                                </select>
                            </div>

                            <div className="form-floating mb-3">
                                <input onChange={this.handlePriceChange} value={this.state.price} placeholder="price" type="number" id="price" className="form-control" />
                                <label htmlFor="price">Price</label>
                            </div>

                            <button className="btn btn-primary">Create</button>
                        </form>
                    </div>
                </div>
            </div>

        )
    }











}

export default CreateSalesRecordForm