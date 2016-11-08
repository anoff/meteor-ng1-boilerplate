import { Mongo } from 'meteor/mongo';
export const Entries = new Mongo.Collection('entries');

Entries.allow({
	insert(userId, entry) {
		return userId && entry.owner === userId;
	},
  update(userId, entry, fields, modifier) {
    return userId && entry.owner === userId;
  },
  remove(userId, entry) {
    return userId && entry.owner === userId;
  }
});
