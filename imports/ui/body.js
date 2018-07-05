import { Template } from 'meteor/templating';
 
import { UBetChecks } from '../api/ubetchecks.js';
 
import './body.html';
 
Template.body.helpers({
  uBetChecks() {
    return UBetChecks.find({});
  },
});