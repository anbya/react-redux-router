import React from 'react';
import { Modal, ModalHeader, ModalBody, Button} from 'reactstrap';

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
        <Button color="primary" onClick={this.toggle} block>Open Modal</Button>
        <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
          <ModalHeader toggle={this.toggle}>Sign Up Form</ModalHeader>
          <ModalBody>
          </ModalBody>
        </Modal>
      </div>
    );
  }
}

export default Modal1;