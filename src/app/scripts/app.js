import React from 'react';
import ReactBootstrap from 'react-bootstrap';
var TopSection = require('./components/TopSection');
window.React = React;
window.ReactBootstrap = ReactBootstrap;
const mountNode = document.getElementById('app');
React.render(<TopSection/>, mountNode);
