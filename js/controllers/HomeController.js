app.controller('HomeController', ['$scope', function($scope) {


	/* THESE ARE YOUR LIST OF MOVIES AND ACCOMPANYING METADATA
	//
	// 	They are in the following format:
	// 	title (String): the name of the movie
	// 	iscore (Number): the IMDB score
	// 	rating (String): the movie's MPAA rating
	// 	released (Date): the release date
	// 	country (String): the country of production
	// 	posters (Array): an array of String values with the URL to movie posters
	// 	imdb (String): the URL to the corresponding IMDB website
	// 	website (String): the URL to the corresponding official website
	// 	likes (Number): a fictitious number of user likes
	// 	dislikes (Number): a fictitious number of user dislikes
	// 	posterindex (Number): a counter to use with the "posters" array to keep track of the current displayed poster index
	//
	// FOR STEP 16, ADD THREE OF YOUR OWN FAVORITE MOVIES WITH METADATA TO THE END OF THIS LIST
	*/
	$scope.movies = [
    {
      title:	'The Shawshank Redemption',
      iscore:	9.3,
      rating:	'R',
      runtime:	142,
      released:	new Date('1994', '10', '14'),
      country:	'USA',
      posters:	['img/shawshank.jpg','img/shawshank2.jpg','img/shawshank3.jpg'],
      imdb:		'http://www.imdb.com/title/tt0111161',
      website:	'https://www.facebook.com/ShawshankRedemptionFilm',
      likes:	1021,
      dislikes:	122,
      posterindex: 0
	},
    {
      title:	'The Godfather',
      iscore:	9.2,
      rating:	'R',
      runtime:	175,
      released:	new Date('1972', '03', '24'),
      country:	'USA',
      posters:	['img/godfather.jpg','img/godfather_2.jpg','img/godfather_3.jpg'],
      imdb:		'http://www.imdb.com/title/tt0068646',
      website:	'https://www.facebook.com/thegodfather',
      likes:	928,
      dislikes:	109,
      posterindex: 0
	},
    {
      title:	'The Godfather: Part II',
      iscore:	9.0,
      rating:	'R',
      runtime:	202,
      released:	new Date('1974', '12', '20'),
      country:	'USA',
      posters:	['img/godfather2.jpg','img/godfather2_2.jpg'],
      imdb:		'http://www.imdb.com/title/tt0071562',
      website:	'https://www.facebook.com/thegodfather',
      likes:	855,
      dislikes:	99,
      posterindex: 0
	},
    {
      title:	'The Dark Knight',
      iscore:	8.9,
      rating:	'PG-13',
      runtime:	152,
      released:	new Date('2008', '07', '18'),
      country:	'USA',
      posters:	['img/darkknight.jpg','img/darkknight2.jpg'],
      imdb:		'http://www.imdb.com/title/tt0468569',
      website:	'http://www.42entertainment.com/work/whysoserious',
      likes:	828,
      dislikes:	127,
      posterindex: 0
	},
    {
      title:	'Schindler\'s List',
      iscore:	8.9,
      rating:	'R',
      runtime:	195,
      released:	new Date('1993', '11', '30'),
      country:	'USA',
      posters:	['img/schindlerslist.jpg'],
      imdb:		'http://www.imdb.com/title/tt0108052',
      website:	'https://www.uphe.com/schindlers-list',
      likes:	812,
      dislikes:	101,
      posterindex: 0
	},
		{
			title:	'Blow',
			iscore:	7.6,
			rating:	'R',
			runtime:	124,
			released:	new Date('2001', '04', '06'),
			country:	'USA',
			posters:	['img/blow1.jpg', 'img/blow2.jpg'],
			imdb:		'http://www.imdb.com/title/tt0221027/',
			website:	'https://www.facebook.com/BlowFilmOfficial/',
			likes:	6731,
			dislikes:	472,
			posterindex: 0
		},
		{
			title:	'The Good, the Bad, and the Ugly',
			iscore:	8.9,
			rating:	'R',
			runtime:	161,
			released:	new Date('1967', '12', '29'),
			country:	'USA/Italy',
			posters:	['img/gb1.jpg', 'img/gb2.jpg'],
			imdb:		'http://www.imdb.com/title/tt0060196/',
			website:	'https://www.facebook.com/pages/The-Good-the-Bad-and-the-Ugly/112176132131614',
			likes:	1045,
			dislikes:	372,
			posterindex: 0
		},
		{
			title:	'Tombstone',
			iscore:	7.8,
			rating:	'R',
			runtime:	130,
			released:	new Date('1993', '12', '25'),
			country:	'USA',
			posters:	['img/tomb1.jpg', 'img/tomb2.jpg'],
			imdb:		'http://www.imdb.com/title/tt0108358/?ref_=fn_al_tt_1',
			website:	'https://www.facebook.com/pages/Tombstone/108177679209846',
			likes:	750,
			dislikes:	233,
			posterindex: 0
		},

  ];




	/* ADD VARIABLES FOR STEP 3 HERE */
	$scope.title = "IMDB + Brian's Top 8 Movies";
	$scope.owner = "Brian";
	$scope.github = "https://github.com/bchok/is219s17Chok-p3";







	/* ADD FUNCTIONS FOR STEP 7 HERE */
	$scope.like = function(index){
		index.likes++;
	};

	$scope.dislike = function(index){
		index.dislikes++;
	};

	$scope.posterClick = function(index){
		if(index.posterindex < index.posters.length - 1){
			index.posterindex++;
		}else {
			index.posterindex = 0;
		}

	};

	$scope.timeText = function (minutes){
		var hours = Math.floor(minutes/60);
		var min = minutes % 60;
		var time = hours + "h " + min + "m";
		return time;
		
	};








}]);
