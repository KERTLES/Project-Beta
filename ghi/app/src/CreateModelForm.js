import React from "react";


class ModelForm extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            name: '',
            picture_url: '',
            manufacturer: '',
            manufacturers: []
        }


        this.handleManufacturerChange = this.handleManufacturerChange.bind(this)
        this.handleNameChange = this.handleNameChange.bind(this)
        this.handlePictureUrlChange = this.handlePictureUrlChange.bind(this)
        this.handleOnSubmit = this.handleOnSubmit.bind(this);
    }


    handleManufacturerChange(event) {
        const value = event.target.value;
        this.setState({ manufacturer: value })
    }

    handleNameChange(event) {
        const value = event.target.value;
        this.setState({ name: value })
    }

    handlePictureUrlChange(event) {
        const value = event.target.value;
        this.setState({ picture_url: value })
    }

    async handleOnSubmit(event) {
        event.preventDefault();
        const data = { ...this.state };
        const manufacturer_id = data.manufacturer
        data["manufacturer_id"] = manufacturer_id
     
        delete data.manufacturers;
        
      

        const url = `http://localhost:8100/api/models/`

        const fetchConfig = {
            method: "post",
            body: JSON.stringify(data),
            headers: {
                'Content-Type': 'application/json',
            },


        }

        const response = await fetch(url, fetchConfig);
        if (response.ok) {
            const newModel = await response.json();
            console.log(newModel)

            const cleared = {
                manufacturer: '',
                name: '',
                picture_url: '',
              
            };
            this.setState(cleared);
        }
    }

    async componentDidMount() {
        const url = 'http://localhost:8100/api/manufacturers/'

        const response = await fetch(url);

        if (response.ok) {
            const data = await response.json();
            // console.log(data)

            this.setState({ manufacturers: data.manufacturers});
            console.log(this.state.manufacturers)
            // console.log(manufacturers)
        }
    }



    render() {
        return (
            <div className="row">
                <div className="offset-3 col-6">
                    <div className="shadow p-4 mt-4">
                        <h1>Create a new Model</h1>
                        <form onSubmit={this.handleOnSubmit} id="create-model-form">

                            <div className="form-floating mb-3">
                                <input value={this.state.name} onChange={this.handleNameChange} placeholder="name" required type="text" name="name" id="name" className="form-control" />
                                <label htmlFor="name">Name</label>
                            </div>

                            <div className="form-floating mb-3">
                                <input onChange={this.handlePictureUrlChange} placeholder="Picture Url"  type="text" name="picture_url" id="picture_url" className="form-control" />
                                <label htmlFor="picture_url">Picture url</label>
                            </div>


                            <div className="mb-3">
                                <select onChange={this.handleManufacturerChange} required name="manufacturer" id="manufacturer" className="form-select" value={this.state.manufacturer}>
                                    <option value="">Choose a Manufacturer</option>
                                    {this.state.manufacturers.map(manufacturer => {

                                        return (

                                            <option key={manufacturer.id} value={manufacturer.id}>
                                                {manufacturer.name}
                            
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
        );
    }





}

export default ModelForm;