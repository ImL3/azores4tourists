import './navbar.html';

Template.navbar.onCreated(function helloOnCreated() {
  console.log("Navbar created...");
});

Template.navbar.helpers({

});

Template.navbar.events({
  'click button'(event, instance) {

  },
});