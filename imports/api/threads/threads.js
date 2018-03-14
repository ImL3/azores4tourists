// Definition of the links collection
import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';

export const Threads = new Mongo.Collection('threads');


if (Meteor.isServer){
     Meteor.publish('posts', function postsPublication(){
          return Threads.find({

          })
     })

}