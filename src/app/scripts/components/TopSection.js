/**
 * The image overlay class holds the top portion of the
 */
import React from 'react';
var EdPanelNavbar = require('./EdpanelNavbar');
var Slogan = require('./Slogan');

export default class extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    let bgImgStyle = {
      /* Set rules to fill background */
      minHeight: '100%',
      minWidth: '1024px',

      /* Set up proportionate scaling */
      width: '100%',
      height: 'auto',

      /* Set up positioning */
      position: 'absolute',
      top: 0,
      left: 0
    };

    let containerStyle = {
        position: 'relative'
    };

    let mottoStyle = {
      lineHeight: '200px',
      margin: 'auto',
      marginTop: '100px',
      position: 'absolute',
      width: '100%',
      color: '#ffffff',
      textAlign: 'center'
    };

    return (
      <div id="container" style={containerStyle}>
        <img id="topSectionBgImg" style={bgImgStyle} src="/assets/images/notebookWithHandCroppedBlue.png"/>
        <Slogan/>
        <EdPanelNavbar/>
      </div>
    );
  }
}
