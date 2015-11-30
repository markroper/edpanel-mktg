import React from 'react';
import { Input, Button } from 'react-bootstrap';

/**
 * The ModalEmailForm is used to collext information from any users on the marketing site that would like to enquire
 * into EdPanel.
 * Created by cschneider on 11/29/15.
 */
export default class extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <form>
          <Input type="text" label="Name" placeholder="Enter text" />
          <Input type="email" label="Email Address" placeholder="Enter text" />
          <Input type="select" label="Reason For Inquiry" placeholder="Select one">
            <option value="Interested in investing">Interested in investing</option>
            <option value="Interested in partnering">Interested in partnering</option>
            <option value="Looking for a job">Looking for a job</option>
            <option value="Other">Other</option>
          </Input>
          <Input type="textarea" label="Message" placeholder="What would you like to tell us?" />
        </form>
      </div>
    );
  }
}
