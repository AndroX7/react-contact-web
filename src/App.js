import React from 'react';
import { NavigationBar } from './components';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import { Table, Row, Col, Container, Image, Button } from 'react-bootstrap';
import { HomeContact, ContactDetail, AddContact } from './views'
function App() {
  return (
    <Router>
      <>
        <Container>
          <Router>
            <NavigationBar
            className="mb-5"
            />
            <Switch>
              <Route exact path="/">
                <HomeContact />
              </Route>
              <Route exact path="/add">
                <AddContact />
              </Route>
              <Route path="/detail/:contact_id">
                <ContactDetail />
              </Route>
            </Switch>
          </Router>
        </Container>
      </>
    </Router>
  );
}

export default App;
