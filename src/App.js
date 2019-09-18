import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Logo from './assets/images/logo.png';
import LogoSquare from './assets/images/logosquare.png';
import HomePage from './components/home';
import AboutPage from './components/about';
import Modal1 from './components/Modal1';
import { Container, Row, Col, Input } from 'reactstrap';

function App() {

  function Home() {
    return (
      <div>
        <HomePage />
      </div>
    );
  }
  function About() {
    return (
      <div>
        <AboutPage />
      </div>
    );
  }
  return (
  <div>
    <Container fluid="True">
      <Row style={{paddingTop:"1vh",paddingBottom:"1vh"}}>
        <Col xs="12" sm="12" md="2" lg="2" xl="2" style={{display:"flex",justifyContent:"center",alignItems:"center"}}>
          <img src={Logo} alt="Logo" style={{width:"100%"}}/>
        </Col>
        <Col xs="12" sm="12" md="7" lg="7" xl="7" style={{display:"flex",justifyContent:"center",alignItems:"center"}}>
          <Input type="email" name="email" id="exampleEmail" placeholder="with a placeholder" />
        </Col>
        <Col xs="12" sm="12" md="3" lg="3" xl="3" style={{display:"flex",justifyContent:"center",alignItems:"center"}}>
          <div style={{width:"100%"}}>
            <Modal1 />
          </div>
        </Col>
      </Row>
      <Row className="MainWraper">
        <Col xs="12" sm="12" md="12" lg="12" xl="12">
          <Router>
              <Route exact path="/" component={Home} />
              <Route path="/about" component={About} />
          </Router>
        </Col>
      </Row>
      <Row>
        <Col xs="2" sm="2" md="1" lg="1" xl="1" style={{display:"flex",justifyContent:"center",alignItems:"center"}}>
          <img src={LogoSquare} alt="Logo" style={{width:"75%"}}/>
        </Col>
        <Col xs="10" sm="10" md="11" lg="11" xl="11" style={{display:"flex",justifyContent:"left",alignItems:"center"}}>
          <p>Copyright © Footer 2014. All right reserved.</p>
        </Col>
      </Row>
    </Container>
  </div>
  );
}

export default App;
