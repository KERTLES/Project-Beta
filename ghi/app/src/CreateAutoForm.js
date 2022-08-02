
import React from "react";
class CreateAutoForm extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            // name: '',
            // picture_url: '',
            model: '',
            models: []
        }

        this.handleModelsChange = this.handleModelsChange.bind(this)

    }

    handleModelsChange(event) {
        const value = event.target.value;
        // console.log(value)
        this.setState({ model: value })
    }


    async componentDidMount() {
       const url =  `http://localhost:8100/api/models/`
       const response = await fetch(url)
       
       if (response.ok){
        const data = await response.json(); 
        console.log(data)

        this.setState({models: data.model})
        // console.log(this.state.models)
       }
    }

    render() {
        return (
            <div className="row">
                <div className="offset-3 col-6">
                    <div className="shadow p-4 mt-4">
                        <h1>Create a new Car</h1>
                        <form id="create-auto-form">
                            <div className="mb-3">
                                <select onChange={this.handleModelsChange} required name="model" id="model" className="form-select" value={this.state.model}>
                                    <option value="">Choose a Model</option>
                                    {this.state.models.map(model => {

                                        return (

                                            <option key={model.id} value={model.id}>
                                                {model.name}

                                            </option>

                                        );
                                    })}
                                </select>

                            </div>
                        </form>
                    </div>
                </div>
            </div>


        )

    }
}


export default CreateAutoForm