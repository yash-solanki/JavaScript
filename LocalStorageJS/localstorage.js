// Get the existing data
// localStorage.setItem('myFavoriteSandwich', 'tuna');
// Get the existing data

/*
//Replacing localStorage() values #

// Save "turkey" as my favorite sandwich
localStorage.setItem('myFavoriteSandwich', 'turkey');
// Update the value to "tuna"
localStorage.setItem('myFavoriteSandwich', 'tuna');
*/

/*
//Appending data to a localStorage() string #
// Get the existing data
var existing = localStorage.getItem('myFavoriteSandwich');

// If no existing data, use the value by itself
// Otherwise, add the new value to it
var data = existing ? existing + ' and tuna' : 'tuna';

// Save back to localStorage
localStorage.setItem('myFavoriteSandwich', data);
*/

/*
//Appending data to a localStorage() array #
var existing = localStorage.getItem('myFavoriteSandwich');

// If no existing data, create an array
// Otherwise, convert the localStorage string to an array
existing = existing ? existing.split(',') : [];

// Add new data to localStorage Array
existing.push('abjhv');

// Save back to localStorage
localStorage.setItem('myFavoriteSandwich', existing.toString());
*/

/*
//Appending data to a localStorage() object #
// var myLunch = {
// 	sandwich: 'turkey',
// 	chips: 'bbq'
// };

// localStorage.setItem('myLunch',JSON.stringify(myLunch));


// Get the existing data
var existing = localStorage.getItem('myLunch');

// If no existing data, create an array
// Otherwise, convert the localStorage string to an array
existing = existing ? JSON.parse(existing) : {};

// Add new data to localStorage Array
existing['water'] = 'bislarry';

// Save back to localStorage
localStorage.setItem('myLunch', JSON.stringify(existing));
*/


//Helper functions #

/*
//Add to a string #

var addToLocalStorageString = function (name, value, delimiter) {

	// Get the existing data
	var existing = localStorage.getItem(name);

	// If no existing data, use the value by itself
	// Otherwise, add the new value to it
	var data = existing ? existing + delimiter + value : value;

	// Save back to localStorage
	localStorage.setItem(name, data);

};

// Example
addToLocalStorageString('myFavoriteSandwich', 'yash', ' and ');
*/

/*
//Add to an array #
var addToLocalStorageArray = function (name, value) {

	// Get the existing data
	var existing = localStorage.getItem(name);

	// If no existing data, create an array
	// Otherwise, convert the localStorage string to an array
	existing = existing ? existing.split(',') : [];

	// Add new data to localStorage Array
	existing.push(value);

	// Save back to localStorage
	localStorage.setItem(name, existing.toString());

};
addToLocalStorageArray('myFavoriteSandwich','ab');
*/
/*
//Add to an object #

var addToLocalStorageObject = function (name, key, value) {

	// Get the existing data
	var existing = localStorage.getItem(name);

	// If no existing data, create an array
	// Otherwise, convert the localStorage string to an array
	existing = existing ? JSON.parse(existing) : {};

	// Add new data to localStorage Array
	existing[key] = value;

	// Save back to localStorage
	localStorage.setItem(name, JSON.stringify(existing));

};
addToLocalStorageObject('myLunch','abc','abc');
	*/