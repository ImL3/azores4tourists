// Methods related to links

import { Meteor } from 'meteor/meteor';
import { check } from 'meteor/check';
import { Links } from './threads.js';

Meteor.methods({
  'threads.insert'(title, url) {
    check(url, String);
    check(title, String);

    return Threads.insert({
      url,
      title,
      createdAt: new Date(),
    });
  },
});
