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
            // console.log(this.state.sales_persons)
        }

        // const salesRecordUrl = `http://localhost:8090/api/sales/`


    }

    // async componentDidUpdate(){
    //     // const url = `http://localhost:8090/api/sales/${id}/`

    //     const response = await fetch(url)
    //     const results = await response.json()
    //     console.log(results.sales_record)


    //     let newArray = await results.sales_record.splice('') 
    //     console.log(newArray)
    //     this.setState( {search_results: (newArray)})

    //     this.setState({search_results: newArray})
    //     console.log(this.state.search_results[0])


    // }



    async handleSalesPersonChange(event) {

        event.preventDefault();
        const id = event.target.value
        const eventData = { ...this.state }
        eventData.sales_person = eventData.sales_persons[id]
        delete eventData.sales_persons
        console.log(eventData)



        // console.log(dataSales.target)
        // console.log(id)

        const url = `http://localhost:8090/api/sales/${id}/`


        const response = await fetch(url)
        const results = await response.json()
        console.log("TESTTTT", results.sales_record)


        // let newArray = await results.sales_record.splice('') 
        // console.log(newArray)
        // this.setState( {search_results: (newArray)})

        // this.setState({search_results: results.sales_record})
        // console.log(this.state.search_results)


        this.setState({ search_results: results.sales_record })
        // console.log(this.state.search_results, "results");
        // this.setState({search_results: results})



        console.log(this.state.search_results)

        // console.log(results)
        // this.setState({ search_results: results.sales_record })
        // console.log(this.search_results)
        // this.state.search_results.push(results.sales_record)

        // let newStateArray = results.sales_record.slice()
        // this.state.search_results.push(newStateArray)
        // console.log(this.state.search_results)


        // console.log(newStateArray)
        // this.state.search_results = results.sales_record
        // this.setState({search_results: results.sales_record})


        // this.setState({search_results: temp})
        // this.setState({search_results: newStateArray})
        // console.log(this.state.search_results)


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
                                // <div>TEST!!!!</div>
                                // <div>fdnjsfndsfdsfdsfds</div>
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

// return (
// <tr key={record.record.vin.vin}>
//     <td>{record.sales_person.name}</td>
//     <td>{record.customer.name}</td>
//     <td>{record.vin.vin}</td>
{/* <td>{record.price}</td> */ }

//* <td>{`${toString(record.price)}`}</td>

//     </tr>
// );


// function SalesHistory(props) {
//     // const [error, setError] = useState("Select a name");
//     const [employees, setEmployees] = useState([]);
//     const [dataLoaded, setDataLoaded] = useState(false);


//     const fetchData = async () => {
//         try {
//             let response = await fetch(`http://localhost:8090/api/salesmen/`);
//             let json = await response.json();
//             return { success: true, data: json };
//         } catch (error) {
//             console.log(error)
//             return { success: false };
//         }
//     }

    // useEffect(() => {
    //     (async () => {
    //         setDataLoaded(false);
    //         let res = await fetchData();
    //         if (res.success) {
    //             setEmployees(res.data.results[0]);
    //             setDataLoaded(true);
    //         }
    //     })
    // })


    // const Dropdown = ({
    //     options
    // }) => {
    //     const [selectedOption, setSelectedOption] = useState(options[0].value);




//     return (

//         <div className="row">

//             <div className="offset-3 col-6">
//                 <div className="shadow p-4 mt-4">
//                     <h1>Sales Person History</h1>
//                     {userLoaded ? (
//                         <select onChange={e => this.setSelectedOption(e.target.value)} className="form-select" aria-label="Default select example" >
//                             <option>Select a name</option>
//                             {this.state.sales_persons?.map(sales_person => {
//                                 return (
//                                     <option value={sales_person.id} key={sales_person.employee_number}>
//                                         {sales_person.name}
//                                     </option>
//                                 );
//                             })}</select>) : (<p>Fetching Data</p>)}






//                 </div>
//             </div>
//         </div>
//     )
// }

// export default SalesHistory






