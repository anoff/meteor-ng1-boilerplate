import angular from 'angular';
import angularMeteor from 'angular-meteor';
import uiRouter from 'angular-ui-router';
import ngMaterial from 'angular-material';

import template from './myApp.html';

import { name as Navigation } from '../navigation/navigation';
import { name as entriesList } from '../entriesList/entriesList';
class MyApp {}

const name = 'myapp';

// create a module
export default angular.module(name, [
  angularMeteor,
	uiRouter,
	'accounts.ui',
	ngMaterial,
	Navigation,
	entriesList
]).component(name, {
  template,
  controllerAs: name,
  controller: MyApp
}).config(config)
.run(run);

function config($locationProvider, $urlRouterProvider, $mdIconProvider) {
  'ngInject';

  $locationProvider.html5Mode(true);

  $urlRouterProvider.otherwise('/entries');

	const iconPath =  '/packages/planettraining_material-design-icons/bower_components/material-design-icons/sprites/svg-sprite/';

  $mdIconProvider
    .iconSet('social',
      iconPath + 'svg-sprite-social.svg')
    .iconSet('action',
      iconPath + 'svg-sprite-action.svg')
    .iconSet('communication',
      iconPath + 'svg-sprite-communication.svg')
    .iconSet('content',
      iconPath + 'svg-sprite-content.svg')
    .iconSet('toggle',
      iconPath + 'svg-sprite-toggle.svg')
    .iconSet('navigation',
      iconPath + 'svg-sprite-navigation.svg')
    .iconSet('image',
      iconPath + 'svg-sprite-image.svg');
}

function run($rootScope, $state) {
  'ngInject';

  $rootScope.$on('$stateChangeError',
    (event, toState, toParams, fromState, fromParams, error) => {
      console.log('Error changing states: %s', error);
    }
  );
}
