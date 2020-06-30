import React from 'react';
import { Table, Container } from 'react-bootstrap';


export default function CharityCard(props) {
    return (
        <div>
            <Container fluid>






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
                     <td>{props.charity.charityName}</td>
                         <td>{props.charity.tagLine}</td>
                            <td>{props.charity.category}</td>
                            <td><a href={props.websiteURL}>Donate</a></td>
                         </tr>
                    </tbody>
                    
                </Table>
            </Container>
        </div>
    )
}
