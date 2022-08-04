import React, { Component } from "react"

class CreateSalesPersonForm extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            name: '',
            employee_number: '',
        }

        this.handleNameChange = this.handleNameChange.bind(this)
        this.handleEmployeeNumChange = this.handleEmployeeNumChange.bind(this)
        this.handleOnSubmit = this.handleOnSubmit.bind(this)
    }

    handleNameChange(event) {
        const value = event.target.value;
        this.setState({ name: value })
    }

    handleEmployeeNumChange(event) {
        const value = event.target.value;
        this.setState({ employee_number: value })

    }

    async handleOnSubmit(event) {
        event.preventDefault()


        const data = { ...this.state }


        const url = `http://localhost:8090/api/salesmen/`

        const fetchConfig = {
            method: "post",
            body: JSON.stringify(data),
            headers: {
                'Content-Type': 'application/json',
            },


        }

        const response = await fetch(url, fetchConfig);
        if (response.ok) {
            const newSalesP = await response.json();
            console.log(newSalesP)
            const cleared = {
                name: '',
                employee_number: '',
            };

            this.setState(cleared);


        }
    }
    render() {
        return (
            <div className="row">
                <div className="offset-3 col-6">
                    <div className="shadow p-4 mt-4">
                        <h1>Create a Sales Person</h1>
                        <form onSubmit={this.handleOnSubmit} id="create-auto-form">
                            <div className="form-floating mb-3">
                                <input onChange={this.handleNameChange} placeholder="Name" required type="text" name="name" id="name" className="form-control" />
                                <label htmlFor="name">Name</label>
                            </div>
                            <div className="form-floating mb-3">
                                <input onChange={this.handleEmployeeNumChange} placeholder="Employee Number" required type="text" name="employee_number" id="employee_number" className="form-control" />
                                <label htmlFor="employee_number">Employee Number</label>
                            </div>


                            <button className="btn btn-primary">Create</button>
                        </form>
                    </div>
                </div >
            </div >

        )
    }











}

export default CreateSalesPersonForm