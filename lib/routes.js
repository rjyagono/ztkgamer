import { Meteor } from 'meteor/meteor';
import { Router, RouteController } from 'meteor/iron:router';

Router.configure({
  layoutTemplate: 'ApplicationLayout'
});

Router.route('/', function () {
  this.render('Home');
});

Router.route('home', function () {
  this.render('Home');
});

Router.route('/cheques', function () {
  this.render('checks');
});