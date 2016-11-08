import angular from 'angular';
import angularMeteor from 'angular-meteor';
import template from './entriesList.html';
import uiRouter from 'angular-ui-router';
import utilsPagination from 'angular-utils-pagination';
import { Counts } from 'meteor/tmeasday:publish-counts';

import { Entries } from '../../../api/entries';

class EntryList {
  constructor($scope, $reactive) {
    'ngInject';

    $reactive(this).attach($scope);

		this.perPage = 2;
		this.page = 1;
		this.sort = {
			name: 1
		};
		this.subscribe('entries', () => [{
      limit: parseInt(this.perPage),
      skip: parseInt((this.getReactively('page') - 1) * this.perPage),
      sort: this.getReactively('sort')}
    ]);

    this.helpers({
      entries() {
				return Entries.find({}, {
          sort : this.getReactively('sort')
        });
      },
			entriesCount() {
				return Counts.get('numberOfEntries');
			}
    });
  }

	pageChanged(newPage) {
    this.page = newPage;
  }
}

const name = 'entriesList';

// create a module
export default angular.module(name, [
  angularMeteor,
	uiRouter,
	utilsPagination
]).component(name, {
  template,
  controllerAs: name,
  controller: EntryList
}).config(config);

function config($stateProvider) {
  'ngInject';
  $stateProvider
    .state('entries', {
      url: '/entries',
      template: '<entries-list></entries-list>'
    });
};
