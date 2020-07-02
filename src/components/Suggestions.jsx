import React, { Component } from 'react'
import { db } from './firebase';
import { Container, Form, Button, Card } from 'react-bootstrap';

export default class Suggestions extends Component {
    state = {
        name: '',
        idea: '',
        notSubmitted: true,
    }

    handleSubmit = (e) => {
        e.preventDefault();
        db.collection('suggestions').add({
            name: this.state.name,
            idea: JSON.stringify(this.state.idea),
        })
        this.setState({
            notSubmitted: false,
        })
    }

    handleChange = (e) => {
        const { value, name } = e.target;
        this.setState({
            [name]: value
        })
    }
    
    render() {
        return (
            <Container className="bg-dark text-white">
                {this.state.notSubmitted ? <Form onSubmit={this.handleSubmit}>
                    <Form.Group controlId="exampleForm.ControlInput1">
                        <Form.Label>Name</Form.Label>
                        <Form.Control type="name" name='name' value={this.state.name} onChange={this.handleChange} />
                    </Form.Group>
                    <Form.Group controlId="exampleForm.ControlTextarea1">
                        <Form.Label>Suggestion</Form.Label>
                        <Form.Control as="textarea" rows="3" placeholder="Ideas go here..." name='idea' value={this.state.idea} onChange={this.handleChange} />
                    </Form.Group>
                    <Button variant="light" type='submit'>Submit</Button>
                </Form>
                    :
                    <Card className="bg-dark text-white">
                        <Card.Body>
                            <Card.Subtitle >Thanks for your feedback!</Card.Subtitle>
                            <Card.Link href="/">Home</Card.Link>
                            <Card.Link href="/charitynav">Donate</Card.Link>
                        </Card.Body>
                    </Card>}
            </Container>
        )
    }
}
