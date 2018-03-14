import './body.html';

Template.body.onCreated(function bodyOnCreated() {
  Meteor.subscribe('links');
  Meteor.subscribe('threads');
});
