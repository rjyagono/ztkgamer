import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';

import { Meteor } from 'meteor/meteor';
import '../imports/api/ubetchecks.js';
import { Email } from 'meteor/email'
import '../imports/api/schema.js';
import { check } from 'meteor/check'


Meteor.startup(() => {
   // process.env.MAIL_URL="smtps://jude.altab:143Romansador@smtp.gmail.com:465";
  smtp = {
    username: 'jude.altab',
    password: '143Romansador',
    server: 'smtp.gmail.com',
    port: 465
  }
  process.env.MAIL_URL = 'smtps://' + encodeURIComponent(smtp.username) + ':' + encodeURIComponent(smtp.password) + '@' + encodeURIComponent(smtp.server) + ':' + smtp.port;
});

S3.config = {
	key: 'AKIAJQN6HWIUJ3ZPULUA',
	secret: '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',
	bucket: 's3-ubetcoin-user-signatures',
	region: 'us-east-1' // Only needed if not "us-east-1" or ""
};


Meteor.methods({
  sendEmail(doc) {

    // TODO: Need to check this line
    // Important server-side check for security and data integrity
    //check(doc, Schema.registerForm);

    // Build the e-mail text
    var text = "First Name: " + doc.firstName + "\n\n"
            + "Last Name: " + doc.lastName + "\n\n\n\n"
            + "Telephone: " + doc.telephone + "\n\n\n\n"
            + "City: " + doc.city + "\n\n\n\n"
            + "Zip: " + doc.postalCode + "\n\n\n\n"
            + "Email: " + doc.email + "\n\n\n\n"
            + "Country: " + doc.country + "\n\n\n\n";

    this.unblock();

    // Send the e-mail
    Email.send({
        to: "info@ubetcoin.io",
        from: doc.email,
        subject: "Ubetcoin Signup Form - Message From " + doc.lastName,
        text: text
    });

  }
});