import { Meteor } from 'meteor/meteor';
import { Entries } from '../api/entries';

Meteor.startup(() => {
  if (Entries.find().count() === 0) {
    const entries = [{
      'name': 'lorem',
      'description': 'Magna reprehenderit reprehenderit elit nisi veniam ullamco duis eiusmod ex deserunt et laboris magna eu ex sunt eiusmod.'
    }, {
      'name': 'ipsum',
      'description': 'Do nulla commodo elit fugiat mollit dolor aliqua exercitation sint quis ipsum dolore consectetur cupidatat dolore qui.'
    }, {
      'name': 'dorem',
      'description': 'Consequat velit excepteur dolore veniam est veniam est.'
    }, {
      'name': 'velit',
      'description': 'Incididunt magna dolore aliquip ut reprehenderit quis labore mollit occaecat fugiat ex tempor ipsum duis.'
    }, {
      'name': 'magna',
      'description': 'Ipsum fugiat amet anim aliqua ad commodo officia amet aliqua esse sit fugiat.'
    }, {
      'name': 'dolore',
      'description': 'Duis laborum esse pariatur nisi exercitation tempor et.'
    }];

    entries.forEach((entry) => {
      Entries.insert(entry)
    });
  }
});
