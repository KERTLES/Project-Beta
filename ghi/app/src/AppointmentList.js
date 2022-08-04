import React, {useEffect} from "react";

class AppointmentList extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      appointments: []
    }
    this.handleChangeStatus = this.handleChangeStatus.bind(this);
  }

  async componentDidMount() {
    const url = 'http://localhost:8080/api/appointments/';
    const response = await fetch(url);
    if (response.ok) {
      const data = await response.json();
      this.setState({ appointments: data })
    }
  }


  async handleChangeStatus(event) {
    const data = {...this.state};
    const appointmentId = data.appointments
    
    const appointmentUlr = `http://localhost:8080/api/appointments/${appointmentId.id}/status/`;
    const fetchConfig = {
      method: "put",
      body: JSON.stringify(data),
      headers: {
        'Content-Type': 'application/json',
      },
    };
    const response = await fetch(appointmentUlr, fetchConfig);
    if (response.ok) {
      const newStatus = await response.json();
      console.log(newStatus)

  }
  }

  render() {
    return (
      <>
      <h2>Service appointments</h2>
      <table className="table table-striped">
      <thead>
        <tr>
          <th>Vin</th>
          <th>Customer</th>
          <th>Date</th>
          <th>Time</th>
          <th>Technician</th>
          <th>Reason</th>
          <th>VIP</th>
        </tr>
      </thead>
      <tbody>
        {this.state.appointments.map(auto => {
        if (auto.status === true){ 
          return (
            <tr key={auto.id}>
              <td>{ auto.vin }</td>
              <td>{ auto.customer }</td>
              <td>{ auto.date.substring(0, 10)}</td>
              <td>{ auto.time}</td>
              <td>{ auto.technician.name}</td>
              <td>{ auto.reason }</td>
              <td>{ auto.is_vip ? 'Yes' : 'No'}</td>
              <td>
                <button type="button" className="btn btn-danger">Cancle</button>
              </td>
              <td>
                <button type="button" onClick={() => this.handleChangeStatus(auto.id)} className="btn btn-success">Finish</button>
              </td>
            </tr>
          );
        }
        })}
      </tbody>
    </table>
    </>
    );
  }
}
export default AppointmentList;
