import React, { Component } from 'react'
import { Card, Container } from 'react-bootstrap';


export default class About extends Component {
    render() {
        return (
            <Container className="bg-dark text-white">
                <Card className="bg-dark text-white">
                    <Card.Body>
                        <Card.Title style={{ fontSize: 35 }}>Welcome To Press(ed)</Card.Title>
                        <br></br>
                        <Card.Subtitle style={{ fontSize: 30 }}>About</Card.Subtitle>
                        <br></br>
                        <Card.Text style={{ fontSize: 20 }}>
                            Press(ed) is an educational resource that provides accessibility to historical information that isn't as widely known. By bridging this gap with knowledge, the goal is to have more empathy, compassion, and understanding for all underrepresented groups.
                            <br></br>
                            <br></br>
                            If you would like to donate or want to hear about specific topics, feel free to donate through Charity Navigator and put an idea in the suggestion box.
                            </Card.Text>
                    </Card.Body>
                </Card>
            </Container>
        )
    }
}
