import SimpleSchema from 'simpl-schema';
SimpleSchema.extendOptions(['autoform']);

Schema = {};

Schema.registerForm = new SimpleSchema({
  firstName: {
    type: String
  },
  lastName: {
    type: String
  },
  telephone: {
    type: String
  },
  city: {
    type: String
  },
  postalCode: {
    type: String,
    label: "ZIP"
  },
  email: {
    type: String,
    regEx: SimpleSchema.RegEx.Email
  },
  country: {
    type: String
  }
});