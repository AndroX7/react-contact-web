import React, {  useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { FETCH_CONTACT_DETAIL, DELETE_CONTACTS } from '../store';
import { useParams } from "react-router-dom";
import { Table, Row, Col, Container, Image, Button } from 'react-bootstrap';
function ContactDetail() {
  const dispatch = useDispatch()
  const deleteContacts = (contact_id) => {
    dispatch(DELETE_CONTACTS(contact_id))
  }
  const detailContact = useSelector((state) => state.detailContact)
  const { contact_id } = useParams()
  useEffect(() => {
    dispatch(FETCH_CONTACT_DETAIL(contact_id))
  },[contact_id]);
  return (
      <>
        <Table>
        <tbody>
          <tr>
            <td>
              <Row>
                <strong className="mr-auto">{detailContact.firstName + ' ' + detailContact.lastName}</strong>
              </Row>
            </td>
          </tr>
          <tr>
            <td>
              <Row>
                <Col xs={3} md={3}>
                  <Row>
                    <Image src={detailContact.photo} rounded fluid/>
                  </Row>
                </Col>
                <Col className="mx-2">
                  <Row>
                    <strong className="mr-auto">First Name : {detailContact.firstName}</strong>
                  </Row>
                  <Row>
                    <strong className="mr-auto">First Name : {detailContact.lastName}</strong>
                  </Row>
                  <Row>
                    <strong className="mr-auto">Age : {detailContact.age}</strong>
                  </Row>
                  <Row>
                    <Button variant="warning" className="my-5 mx-2">Edit Contact</Button>
                    <Button variant="danger" className="my-5 mx-2" onClick={() => {deleteContacts(contact_id)}}>Delete Contact</Button>
                  </Row>
                </Col>
              </Row>
            </td>
          </tr>
        </tbody>
      </Table>
      </>
  );
}

export default ContactDetail;
