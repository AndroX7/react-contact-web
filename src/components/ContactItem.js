import React from 'react';
import { Table, Button, Row, Col, Image, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { DELETE_CONTACTS } from '../store';
function ContactItem(props) {
  const dispatch = useDispatch()
  const deleteContacts = (contact_id) => {
    dispatch(DELETE_CONTACTS(contact_id))
  }
  const { contact } = props
  let contactPhoto;
  if(contact.photo) {
    contactPhoto = contact.photo
  } else {
    contactPhoto = 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/93/Google_Contacts_icon.svg/1200px-Google_Contacts_icon.svg.png'
  }
  return (
      <>
        <tr>
          <td>
            <Row className="mx-1">
              {contact.firstName + ' ' + contact.lastName}
            </Row>
            <Row>
              <Col xs={2} md={2}>
                <Image src={ contactPhoto } rounded fluid/>
              </Col>
              <Col xs={4} md={4}>
                <Row>
                  First Name: {contact.firstName}
                </Row>
                <Row>
                  Last Name: {contact.lastName}
                </Row>
                <Row>
                  Age: {contact.age}
                </Row>
                <Row>
                  <Link to={`detail/${contact.id}`}> {'>>See Detail<<'} </Link>
                </Row>
                <Row>
                  <Button variant="warning" className="my-5 mx-2">Edit Contact</Button>
                  <Button variant="danger" className="my-5 mx-2" onClick={() => {deleteContacts(contact.id)}}>Delete Contact</Button>
                </Row>
              </Col>
            </Row>
          </td>
        </tr>
      </>
  );
}

export default ContactItem;
