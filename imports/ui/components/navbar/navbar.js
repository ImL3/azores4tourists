import './navbar.html';

Template.navbar.onCreated(function navbarOnCreated() {
  console.log("Navbar created...");
});

Template.navbar.helpers({

});

Template.navbar.events({
  'click button'(event, instance) {

  },
});
