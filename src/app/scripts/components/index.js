/**
 * Created by cschneider on 11/20/15.
 * Create an index of all of the edpanel marketing components
 */
'use strict';

//The Edpanel navbar in case we want to reuse it all over the place.
var EdpanelNavbar = require('./EdpanelNavbar');

exports.EdpanelNavbar = EdpanelNavbar;

//The aggregation of all components in the top section of the page
var TopSection = require('./TopSection');

exports.TopSection = TopSection;

//The EdPanel Slogan component
var Slogan = require('./Slogan');

exports.Slogan = Slogan;

//The EdPanel Slogan component
var ModalEmailForm = require('./ModalEmailForm');

exports.ModalEmailForm = ModalEmailForm;
