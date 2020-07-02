import React, { Component } from 'react'
import { Card, Container } from 'react-bootstrap';

export default class About extends Component {
    render() {
        return (
            <Container className="bg-dark text-white">
                <Card className="bg-dark text-white">
                    <Card.Body>
                        <Card.Title>Welcome To Press(Ed)</Card.Title>
                        <Card.Subtitle >About</Card.Subtitle>
                        <Card.Text>
                            Press(Ed) is a resource for articles and historical information that aren't as widely known to be more accessible. By bridging this gap with knowledge, the goal is to have more emapthy, compassion, and understanding for all underrepresented groups.


                            If you would like to donate or want to hear about specific topics, feel free to donate through Charity Navigator and Put an idea in the suggestion box.

                        
    </Card.Text>
                        <Card.Link href="#">Card Link</Card.Link>
                        <Card.Link href="#">Another Link</Card.Link>
                    </Card.Body>
                </Card>
            </Container>
        )
    }
}
