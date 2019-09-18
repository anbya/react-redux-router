import React from 'react';
import { Row, Col,Modal, ModalHeader, ModalBody, Button, Input } from 'reactstrap';
import DefaultImg from '../assets/images/defaultImage.png';

class Modal1 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false,
      header:''
    };

    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState(prevState => ({
      modal: !prevState.modal
    }));
  }

  render() {
    return (
      <div>
        <Button color="primary" onClick={this.toggle} block>0 Items <i class="fa fa-shopping-cart" aria-hidden="true"></i></Button>
        <Modal size="lg" isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
          <ModalHeader toggle={this.toggle}>Shopping Cart</ModalHeader>
          <ModalBody>
            <Row>
              <Col xs="2" sm="2" md="2" lg="2" xl="2">
                <img src={DefaultImg} alt="Logo" style={{width:"100%"}}/>
              </Col>
              <Col xs="8" sm="8" md="8" lg="8" xl="8" style={{display:"flex",justifyContent:"left",alignItems:"center"}}>
                <Row>
                  <Col xs="12" sm="12" md="12" lg="12" xl="12">
                    <h3>Item Name</h3>
                  </Col>
                  <Col xs="6" sm="6" md="6" lg="6" xl="6">
                    <Row>
                        <Col xs="3" sm="3" md="3" lg="3" xl="3" style={{padding:"0px"}}>
                          <Button color="primary" block><i class="fa fa-minus" aria-hidden="true"></i></Button>
                        </Col>
                        <Col xs="6" sm="6" md="6" lg="6" xl="6" style={{padding:"0px"}}>
                          <Input type="email" name="email" id="exampleEmail" />
                        </Col>
                        <Col xs="3" sm="3" md="3" lg="3" xl="3" style={{padding:"0px"}}>
                          <Button color="primary" block><i class="fa fa-plus" aria-hidden="true"></i></Button>
                        </Col>
                    </Row>
                  </Col>
                  <Col xs="6" sm="6" md="6" lg="6" xl="6">
                  </Col>
                </Row>
              </Col>
              <Col xs="2" sm="2" md="2" lg="2" xl="2" style={{display:"flex",justifyContent:"center",alignItems:"center"}}>
                <Button color="danger" block><i class="fa fa-trash fa-2x" aria-hidden="true"></i></Button>
              </Col>
            </Row>
          </ModalBody>
        </Modal>
      </div>
    );
  }
}

export default Modal1;