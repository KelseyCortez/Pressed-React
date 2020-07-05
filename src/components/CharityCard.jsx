import React, { Component } from 'react';
import { Table, Container } from 'react-bootstrap';


export default class CharityCard extends Component {
    render() {
        return (
            <div>
                <Container>
                    <Table responsive striped bordered hover variant="dark">
                        <thead>
                            <tr>
                                <th>Charity</th>
                                <th>Mission</th>
                                <th>Rating</th>
                                <th>Donate Here</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>{this.props.charity.charityName}</td>
                                <td>{this.props.charity.mission}</td>
                                <td>{this.props.charity.currentRating.rating}</td>
                                <td><a target='_blank' href={this.props.charity.charityNavigatorURL}>Donate</a></td>
                            </tr>
                        </tbody>
                    </Table>
                </Container>
            </div>

        )
    }
}
