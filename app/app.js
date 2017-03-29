'use strict';

// Initialize Firebase
var config = {
	apiKey: "AIzaSyCWLr1J-XCNxwQmcC7rFH6pfJUZMLTxa4s",
	authDomain: "angular-firebase-45775.firebaseapp.com",
	databaseURL: "https://angular-firebase-45775.firebaseio.com",
	storageBucket: "angular-firebase-45775.appspot.com",
	messagingSenderId: "574471434764"
};
firebase.initializeApp(config);

// Declare app level module which depends on views, and components
angular
	.module('angularFirebaseWebApp', [
		'ngRoute',
		'angularFirebaseWebApp.LoginCtrl',
		'angularFirebaseWebApp.RegisterCtrl',
		'angularFirebaseWebApp.ArticleCtrl',
		'angularFirebaseWebApp.AddArticleCtrl'

	])
	.config(['$routeProvider', '$httpProvider', function($routeProvider, $httpProvider) {

		// routes 
		$routeProvider
		// login
			.when('/login', {
			templateUrl: 'view/login.html',
			controller: 'LoginCtrl'
		})

		// register
		.when('/register', {
				templateUrl: 'view/register.html',
				controller: 'RegisterCtrl'
			})
			// articles
			.when('/articles', {
				templateUrl: 'view/article.html',
				controller: 'ArticleCtrl'
			})
			// add article
			.when('/addArticle', {
				templateUrl: 'view/addArticle.html',
				controller: 'AddArticleCtrl'
			})
			// default
			.otherwise({
				redirectTo: '/login'
			}),

			// Enable cross domain calls
			$httpProvider.defaults.useXDomain = true,

			//Remove the header used to identify ajax call  that would prevent CORS from working
			delete $httpProvider.defaults.headers.common['X-Requested-With'];
	}]);