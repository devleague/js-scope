// Functions can acces variables outside of its own scope.
// Fill in the closeLid and openLid functions to set the isCookieJarOpen variable to false or true respectively.
var isCookieJarOpen = null;

function closeLid() {
  /* answer here */
}

function openLid() {
  /* answer here */
}


// Fill in the return value for the inner function to return a string, 'Hello World' using only the variables provided
// in both inner and outer functions
function outerFunction() {
  var hello = 'Hello';

  function innerFunction() {
    var world = 'World';
    return /* Your answer here */;
  }
  innerFunction();
}

// Make sure you take hoisting into account for this problem!
// What is the return value of the sushiRestaurant function when executed?
// Fill your answer in the 'sushiRestaurantReturnValue' variable below
function sushiRestaurant() {

  var belt = [];
  var fish = 'Hamachi'

  var makeRice = function() {
    return 'brownRice';
  }

  fish = 'Ahi'

  function makeSushi(ingredient1, ingredient2) {
    return ingredient1 + ' ' + ingredient2
  }

  makeRice = function() {
    return 'whiteRice'
  }

  belt.push( makeSushi( makeRice(), fish ) );
  belt.push( makeSushi( makeRice(), fish ) );

  return belt
}

let sushiRestaurantReturnValue = /* Your answer here */


// This is a function that takes in a 2d-array (or matrix) and returns the sum of all elements.
// It's broken due to count variables colliding into each other.  Fix it!
function addMatrixElements(matrix) {

  var result = 0;

  for(var i = 0; i < matrix.length; i++) {
    /* fix counter variables in this nested loop */
    for(var i = 0; i < matrix[i].length; i++) {
      result = result + matrix[i][i];
    }
  }
  return result;
}


// This function is returning the wrong userObject data. It should be returning
// Neo's information and not Morpheus'.  Fix it!
function sendDataToClient() {

  var userObject = {
    handle: 'neo',
    authenticated: false
  }

  function authenticateUser(obj, username) {

    var userObject = {
      handle: 'morpheus',
      authenticated: false
    };

    if (userObject.handle === username) {
      userObject.authenticated = true;
      return userObject
    } else {
      return userObject
    }
  }
  authenticateUser(userObject, 'neo')
  return userObject
}