import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';
import { Tracker } from 'meteor/tracker';
import '../imports/api/schema.js'; 
import '../imports/startup/accounts-config.js';
import '../lib/routes.js';

import './main.html';

Accounts.onLogin(function(user) {
    //console.log(user.user.log[user.user.log.length - 1]);
    if(user.type == 'password') {
        // logged in from logged out status!
        Router.go("cheques");
    } else if(user.type == 'resume') {
        // just refreshed
    }
    	if(Router.current().route.path() == '/cheques'){

			if(!Meteor.user()){
				Router.go("/");
			}
		} else {
			console.log("test");
		}
});

Accounts.onLogout(function() {

  	Router.go("/");
  	console.log("logout ko");

});

Template.register1.helpers({
  registerSchema: function() {
    return Schema.registerForm;
  }
});