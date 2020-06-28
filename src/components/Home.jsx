import React, { Component } from 'react'
import { Nav, Navbar, Form, Button, FormControl } from 'react-bootstrap';

export default class Home extends Component {
    render() {
        return (
            <div className='home'>
                <Navbar fixed="top" />
      <Navbar bg="light" variant="light">
        <Navbar.Brand href="#home">Press(ed)</Navbar.Brand>
        <Nav className="mr-auto">
          <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#about">About</Nav.Link>
          <Nav.Link href="#donate">Donate</Nav.Link>
        </Nav>
        <Form inline>
          <FormControl type="text" placeholder="Search" className="mr-sm-2" />
          <Button variant="outline-primary">Search</Button>
        </Form>
      </Navbar>
      <h1 className="App-header">
        Press(ed)
      </h1>
            </div>
        )
    }
}
