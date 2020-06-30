import React, { Component } from 'react'
import { Nav, Navbar, Form, Button, FormControl } from 'react-bootstrap';

export default class Home extends Component {
    render() {
        return (
            <div className='home'>
                <Navbar fixed="top" />
      <Navbar bg="light" variant="light">
        <Navbar.Brand href="/">Press(ed)</Navbar.Brand>
        <Nav className="mr-auto">
          <Nav.Link href="/">Home</Nav.Link>
          <Nav.Link href="/about">About</Nav.Link>
          <Nav.Link href="/charitynav">Donate</Nav.Link>
        </Nav>
      </Navbar>
      <h1>Press(ed)</h1>
            </div>
        )
    }
}
