// All links-related publications

import { Meteor } from 'meteor/meteor';
import { Threads } from '../threads.js';

Meteor.publish('threads.all', function () {
  return Threads.find();
});
