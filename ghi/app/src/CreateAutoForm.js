
import React from "react";
class CreateAutoForm extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            color: '',
            year: '', 
            vin: '', 
            model: '',
            models: []
        }

        this.handleModelsChange = this.handleModelsChange.bind(this)
        this.handleColorChange = this.handleColorChange.bind(this)
        this.handleYearChange = this.handleYearChange.bind(this)
        this.handleVinChange = this.handleVinChange.bind(this)
        this.handleOnSubmit = this.handleOnSubmit.bind(this)
    }

    handleModelsChange(event) {
        const value = event.target.value;
        this.setState({ model: value })
    }

    handleColorChange(event) {
        const value = event.target.value
        this.setState({ color: value })
    }

    handleYearChange(event) {
        const value = event.target.value
        this.setState({ year: value })
    }

    handleVinChange(event){
        const value = event.target.value
        this.setState({vin: value})
    }

    async handleOnSubmit(event){
        event.preventDefault(); 
        const data = {...this.state};
        delete data.models 
        const model_id = data.model 
        data["model_id"] = model_id
        delete data.model
        console.log(data)


        const url = `http://localhost:8100/api/automobiles/`

        const fetchConfig = {
            method: "post",
            body: JSON.stringify(data),
            headers: {
                'Content-Type': 'application/json',
            },


        }


        const response = await fetch(url, fetchConfig);
        if (response.ok) {
            const newAuto = await response.json();
            console.log(newAuto)

            const cleared = {
                model: '',
                color: '',
                year: '',
                vin: '',
                
              
            };
            this.setState(cleared);
    }
}



    async componentDidMount() {
        const url = `http://localhost:8100/api/models/`
        const response = await fetch(url)

        if (response.ok) {
            const data = await response.json();
           

            this.setState({ models: data.models })
         
        }
    }

    render() {
        return (
            <div className="row">
                <div className="offset-3 col-6">
                    <div className="shadow p-4 mt-4">
                        <h1>Add an automobile to inventory</h1>
                        <form onSubmit={this.handleOnSubmit} id="create-auto-form">


                            <div className="form-floating mb-3">
                                <input onChange={this.handleColorChange} value={this.state.color} placeholder="Color" required type="text" name="color" id="color" className="form-control" />
                                <label htmlFor="color">Color</label>
                            </div>

                            <div className="form-floating mb-3">
                                <input onChange={this.handleYearChange} value={this.state.year} placeholder="Year" required type="text" name="year" id="year" className="form-control" />
                                <label htmlFor="year">Year</label>
                            </div>

                            <div className="form-floating mb-3">
                                <input onChange={this.handleVinChange} value={this.state.vin} placeholder="Vin" required type="text" name="vin" id="vin" className="form-control" />
                                <label htmlFor="vin">Vin</label>
                            </div>


                            <div className="mb-3">
                                <select onChange={this.handleModelsChange} required name="model" id="model" className="form-select" value={this.state.model}>
                                    <option value="">Choose a Model</option>
                                    {this.state.models?.map(model => {

                                        return (

                                            <option key={model.id} value={model.id}>
                                                {model.name}

                                            </option>

                                        );
                                    })}
                                </select>

                            </div>
                            <button className="btn btn-primary">Create</button>
                        </form>
                    </div>
                </div>
            </div>


        )

    }
}


export default CreateAutoForm