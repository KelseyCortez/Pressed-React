import React from 'react';
// import { CharityNav } from './CharityNav';
import { Card } from 'react-bootstrap';

export default function CharityCard(props) {
    return (
        <div>
            <Card style={{ width: '18rem' }}>
                <Card.Body>
                    <Card.Title>{props.charity.charityName}</Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">{props.charity.tagLine}</Card.Subtitle>
                    <Card.Text>
                        {props.charity.mission}
                    </Card.Text>
                    <Card.Link href={props.charity.websiteURL}>Card Link</Card.Link>
                </Card.Body>
            </Card>
        </div>
    )
}
