import React, { useEffect, useState } from 'react';
import { Form, Row, Col, Container, Image, Button } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { POST_CONTACT } from '../store'
function AddContact() {
  const dispatch = useDispatch()
  let postContact = {
    firstName : '',
    lastName: '',
    age: '',
    photo: ''
  }
  const firstNameChangeHandler = (e) => {
    e.preventDefault();
    postContact.firstName = e.target.value;
  }

  const lastNameChangeHandler = (e) => {
    e.preventDefault();
    postContact.lastName = e.target.value;
  }

  const ageChangeHandler = (e) => {
    e.preventDefault();
    postContact.age = e.target.value;
  }

  const photoChangeHandler = (e) => {
    e.preventDefault();
    postContact.photo = e.target.value;
  }
  const submitContact = async (e) => {
    e.preventDefault();
    await dispatch(POST_CONTACT(postContact));
  }
  return (
    <>
      <Form onSubmit={submitContact}>
        <Form.Group controlId="formBasicFirstName">
          <Form.Label>First Name</Form.Label>
          <Form.Control type="default" placeholder="Your First Name" onChange={(e) => firstNameChangeHandler(e)}/>
        </Form.Group>

        <Form.Group controlId="formBasicLastName">
          <Form.Label>Last Name</Form.Label>
          <Form.Control type="default" placeholder="Your Last/Family Name" onChange={(e) => lastNameChangeHandler(e)}/>
        </Form.Group>

        <Form.Group controlId="formBasicPhotoUrl">
          <Form.Label>Age</Form.Label>
          <Form.Control type="number" placeholder="Age" onChange={(e) => ageChangeHandler(e)}/>
        </Form.Group>

        <Form.Group controlId="formBasicPhotoUrl">
          <Form.Label>Link Photo</Form.Label>
          <Form.Control type="default" placeholder="Photo Url" onChange={(e) => photoChangeHandler(e)}/>
        </Form.Group>
        <Row>
          <Col xs={1} md={1}>
            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Col>
          <Col xs={1} md={1}>
            <Button variant="primary">
              Back
            </Button>
          </Col>
        </Row>
      </Form>
    </>
  )
}
export default AddContact;
