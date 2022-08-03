import React from "react";


class ServiceAppointmentForm extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            vin: '',
            customer: '',
            date: '',
            time: '',
            technician: '',
            technician: [],
            reason: "",

        };
        this.handleVinChange = this.handleVinChange.bind(this);
        this.handleCustomerChange = this.handleCustomerChange.bind(this);
        this.handleDateChange = this.handleDateChange.bind(this);
        this.handleTimeChange = this.handleTimeChange.bind(this);
        this.handleTechnicianChange = this.handleTechnicianChange.bind(this);
        this.handleReasonChange = this.handleReasonChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }


    async handleSubmit(event) {
        event.preventDefault();
        const data = {...this.state};
        delete data.technician

        const appointmentUrl = 'http://localhost:8080/api/appointments/';
        const fetchConfig = {
          method: "post",
          body: JSON.stringify(data),
          headers: {
            'Content-Type': 'application/json',
          },
        };
        const response = await fetch(appointmentUrl, fetchConfig);
        if (response.ok) {
            const newAppointment = await response.json();
            console.log(newAppointment)

            const cleared = {
                vin: '',
                customer: '',
                date: '',
                time: '',
                technician: '',
                reason: '',
            };
            this.setState(cleared);

        }
    }


    async componentDidMount() {
    const url = 'http://localhost:8080/api/technicians/'
    const response = await fetch(url);
    if (response.ok) {
        const data = await response.json();
        this.setState({technician: data});
        }
    }


    handleVinChange(event) {
        const value = event.target.value;
        this.setState({vin: value});
    }
    handleCustomerChange(event) {
        const value = event.target.value;
        this.setState({customer: value});
    }
    handleDateChange(event) {
        const value = event.target.value;
        this.setState({date: value});
    }
    handleTimeChange(event) {
        const value = event.target.value;
        this.setState({time: value});
    }
    handleTechnicianChange(event) {
        const value = event.target.value;
        this.setState({technician: value});
    }
    handleReasonChange(event) {
        const value = event.target.value;
        this.setState({reason: value});
    }


    render() {
        return(
            <div className="row">
        <div className="offset-3 col-6">
          <div className="shadow p-4 mt-4">
            <h1>Create a new service ticket</h1>
            <form onSubmit={this.handleSubmit} id="create-presentation-form">
              <div className="form-floating mb-3">
                <input onChange={this.handleVinChange} value={this.state.vin} placeholder="Vin" required type="text" id="vin" className="form-control" />
                <label htmlFor="vin">Vin</label>
              </div>
              <div className="form-floating mb-3">
                <input onChange={this.handleCustomerChange} value={this.state.customer} placeholder="Customer" required type="text" id="customer" className="form-control" />
                <label htmlFor="customer">Customer name</label>
              </div>
              <div className="form-floating mb-3">
                <input onChange={this.handleDateChange} value={this.state.date} placeholder="Date" type="date" id="date" className="form-control" />
                <label htmlFor="date">Date</label>
              </div>
              <div className="form-floating mb-3">
                <input onChange={this.handleTimeChange} value={this.state.time} placeholder="Time" required type="time" id="time" className="form-control" />
                <label htmlFor="time">Time</label>
              </div>
              <div className="mb-3">
                <select onChange={this.handleTechnicianChange} required className="form-select" id="technician">
                  <option value="">Technician</option>
                  {this.state.technician.map(tech =>{
                    return (
                        <option value={tech.employee_number} key={tech.id}>
                            {tech.name}
                        </option>
                    )
                  })}
                </select>
              </div>
              <div className="form-floating mb-3">
                <input onChange={this.handleReasonChange} value={this.state.reason} placeholder="Reason" required type="text" id="reason" className="form-control" />
                <label htmlFor="reason">Reason</label>
              </div>
              <button className="btn btn-primary">Create</button>
            </form>
          </div>
        </div>
      </div>
        );
    }
}

export default ServiceAppointmentForm;