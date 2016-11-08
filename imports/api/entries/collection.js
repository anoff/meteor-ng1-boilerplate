import { Mongo } from 'meteor/mongo';
export const Entries = new Mongo.Collection('entries');

Entries.allow({
	insert(userId, entry) {
		return true;
	},
  update(userId, entry, fields, modifier) {
    return true;
  },
  remove(userId, entry) {
    return true;
  }
});
