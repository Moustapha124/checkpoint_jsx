import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card, Col, Row } from 'react-bootstrap'; // Import Col and Row
import Name from './Components/Name';
import Price from './Components/Price';
import Description from './Components/Description';
import Image from './Components/Image';
import Button from 'react-bootstrap/Button';
import NavBar from './Components/NavBar';

//const name = "Votre prénom"; // Replace with your name

function App() {
  const [userName, setUserName]= useState('');
  return (
    <div>
      <NavBar />
      <Card style={{ width: '18rem', marginTop: '25px', marginLeft: 'auto', marginRight: 'auto' }}> 
        <Image variant="top" /> 
        <Card.Body>
          <Card.Title><Name /></Card.Title>
          <Card.Text style={{ textAlign: 'center', fontWeight: '100' }}>
            <Description /> 
            <Price /> 
            <b style={{ marginRight: '10px' }}>CFA</b>
          </Card.Text>
          <Row>
            <Col xs={12} md={4} />
            <Col xs={12} md={4} className="d-flex justify-content-center"> {/* Center button */}
              <Button variant="primary">Commander</Button>
            </Col>
            <Col xs={12} md={4} />
          </Row>
          <Card.Text>
            {userName ? (
              <>
                Bonjour, {userName} !
                <br />
                {userName !== '' && <img src={'/Images/emo.jpg'} alt="teg" width="100" />}
              </>
            ) : (
              <>
                Hello, there !
                <br />
                Veuillez saisir votre nom :
                <input type="text" value={userName} onChange={(e) => setUserName(e.target.value)} />
              </>
            )}
          </Card.Text>
        </Card.Body>
      </Card>
      <br />
    </div>
  );
}

export default App;
