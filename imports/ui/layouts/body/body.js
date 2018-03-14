import './body.html';

import '../../components/header/header.js';
import '../../components/footer/footer.js';

Template.body.onCreated(function bodyOnCreated() {
  Meteor.subscribe('links');
  Meteor.subscribe('threads');
});
