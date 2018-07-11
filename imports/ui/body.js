import { Template } from 'meteor/templating';
 
import { UBetChecks } from '../api/ztkgamers.js';
 
import './body.html';
 
Template.body.helpers({
  uBetChecks() {
    return ZTKGamersChecks.find({});
  },
});