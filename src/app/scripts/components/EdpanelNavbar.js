import React from 'react';
import { Navbar, NavbarBrand, Nav, NavItem, Modal, ModalBody, ModalFooter, ModalHeader, ModalTitle, Button } from 'react-bootstrap';
var ModalEmailForm = require('./ModalEmailForm');

/**
 * The navbar react component holds the Brand and the ContactUs button to allow users to send along inquiries
 * to the team.
 */
export default class extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showModal: false,
    };
  }

  closeModal(){
    this.setState(
      {
        showModal : false
      }
    );
  }

  openModal(){
    this.setState(
      {
        showModal : true
      }
    );
  }

  //It would be really nice if the NavBar had a sweet logo next to the EdPanel Name
  render() {
    var message = this.state.message;
    return (
      <div>
        <Navbar fluid>
          <NavbarBrand>EdPanel</NavbarBrand>
          <Nav pullRight>
            <NavItem eventKey={1} href="#" onClick={this.openModal.bind(this)}>Contact Us!</NavItem>
          </Nav>
        </Navbar>

        <Modal
          show={this.state.showModal}
          onHide={this.closeModal.bind(this)}
          container={this}
          aria-labelledby="contained-modal-title"
        >
          <ModalHeader closeButton>
            <ModalTitle id="contained-modal-title">So glad you want to chat!</ModalTitle>
          </ModalHeader>
          <ModalBody>
            <ModalEmailForm/>
          </ModalBody>
          <ModalFooter>
            <Button bsStyle="success" onClick={this.closeModal.bind(this)}>Submit</Button>
          </ModalFooter>
        </Modal>
      </div>
    );
  }
}
