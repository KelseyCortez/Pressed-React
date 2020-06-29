import React, { Component } from 'react'
import { API_KEY, API_ID } from '../config.js';
// import { Table } from 'react-bootstrap';
import CharityCard from './CharityCard';

export default class CharityNav extends Component {
    constructor(props) {
        super(props)

        this.state = { 
            charity: [],
        }
    }
    componentDidMount() {
        fetch(`https://api.data.charitynavigator.org/v2/organizations/?app_id=${API_ID}&app_key=${API_KEY}`)
            .then(res => res.json())
            .then(data => {
                this.setState({
                    charity: data
                })

            })


    }

    render() {
        return (
            <div>
                {this.state.charity.map((charity, index) => {
                    return (
                        <CharityCard charity={charity} key={index}/>

                //     <Table striped bordered hover variant="dark" tables={tables} key={index}>
                //     <thead>
                //         <tr>
                //             <th>#</th>
                //             <th>First Name</th>
                //             <th>Last Name</th>
                //             <th>Username</th>
                //         </tr>
                //     </thead>
                //     <tbody>
                //         <tr>
                //     <td>{tables.charityName}</td>
                //             <td>{tables.currentRating}</td>
                //             <td>{tables.categoryRating}</td>
                //             <td>@mdo</td>
                //         </tr>
                //         <tr>
                //             <td>2</td>
                //             <td>Jacob</td>
                //             <td>Thornton</td>
                //             <td>@fat</td>
                //         </tr>
                //         <tr>
                //             <td>3</td>
                //             <td colSpan="2">Larry the Bird</td>
                //             <td>@twitter</td>
                //         </tr>
                //     </tbody>
                    
                // </Table>
                )
                
            })}
        )
            </div>
        )
    }
}
