import { Meteor } from 'meteor/meteor';
import { Counts } from 'meteor/tmeasday:publish-counts';

import { Entries } from './collection';

if (Meteor.isServer) {
  Meteor.publish('entries', function(options) {
    const selector = {};

		Counts.publish(this, 'numberOfEntries', Entries.find(selector), {
      noReady: true
    });

    return Entries.find(selector, options);
  });
}
