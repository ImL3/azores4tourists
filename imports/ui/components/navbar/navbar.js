import './navbar.html';

import '../auth/auth.js';
import '../lang/lang.js';


Template.navbar.onCreated(function navbarOnCreated() {
  console.log("Navbar created...");
});

Template.navbar.helpers({

});

Template.navbar.events({
  'click button'(event, instance) {

  },
});
