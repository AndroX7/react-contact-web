import React, {  useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { FETCH_CONTACTS, SET_FILTER_DATA } from '../store';
import { NavigationBar, ContactItem } from '../components';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import { Table, Row, Col, Container } from 'react-bootstrap';
function HomeContact() {
  const dispatch = useDispatch()
  const contacts = useSelector((state) => state.contact)
  const filterWord = useSelector((state) => state.filterWord)
  const filterData = useSelector((state) => state.filterData)
  useEffect(() => {
    dispatch(FETCH_CONTACTS())
  },[dispatch]);

  useEffect(() => {
    let dataFilter = contacts.filter(contact => {
      let fullName = contact.firstName + ' ' + contact.lastName
      return contact.firstName.toLowerCase().includes(filterWord.toLowerCase()) || contact.lastName.toLowerCase().includes(filterWord.toLowerCase()) || fullName.toLowerCase().includes(filterWord.toLowerCase())
    })
    dispatch(SET_FILTER_DATA(dataFilter))
  }, [filterWord, contacts, dispatch])
  return (
    <Router>
      <>
          <Table hover responsive>
            <thead>
              <tr>
                <th>List Contact</th>
              </tr>
            </thead>
            <tbody>
              {
                filterData.map((contact) => (
                  <ContactItem contact={contact} key={contact.id} />
                ))
              }
            </tbody>
          </Table>
      </>
    </Router>
  );
}

export default HomeContact;
