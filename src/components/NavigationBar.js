import React, {useEffect, useState} from 'react'
import {useDispatch} from 'react-redux'
import { Link } from 'react-router-dom';
import { Navbar, Nav, Form, FormControl, Button } from 'react-bootstrap';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import { SET_FILTER_WORD } from '../store'
function NavigationBar() {
  const dispatch = useDispatch()

  let ChangeHandler = (event) => {
    dispatch(SET_FILTER_WORD(event.target.value))
  }

  return (
      <>
        <Navbar bg="dark" variant="dark">
          <Navbar.Brand href="#home">Home</Navbar.Brand>
          <Nav className="mr-auto">
            <Nav.Link href="#home"><Link to="/">List Contact</Link></Nav.Link>
            <Nav.Link href="#features">Add New Contact</Nav.Link>
          </Nav>
          <Form inline>
            <FormControl type="text" placeholder="Find In Your Contact" className="mr-sm-2" onChange={ChangeHandler}/>
          </Form>
        </Navbar>
      </>
  );
}

export default NavigationBar;
