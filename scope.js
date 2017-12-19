// Fill in the closeLid and openLid functions to set the isCookieJarOpen variable to false or true respectively.
const isCookieJarOpen = null;

function closeLid () {
  /* answer here */
}

function openLid () {
  /* answer here */
}

// Fill in the return value for the inner function to return a string, 'Hello World' using only the variables provided
// in both inner and outer functions
function outerFunction () {
  const hello = 'Hello';

  function innerFunction () {
    const world = 'World';
  }
  return innerFunction();
}

// This is a function that takes in a 2d-array (or matrix) and returns the sum of all elements
// It's broken due to count variables colliding into each other.  Fix it!
function addMatrixElements (matrix) {
  let result = 0;

  for (var i = 0; i < matrix.length; i++) {
    /* fix counter variables in the second loop */
    for (var i = 0; i < matrix[i].length; i++) {
      result += matrix[i][i];
    }
  }
  return result;
}

// This function is returning the wrong userObject data. It should be returning
// Neo's information and not Morpheus'.  Fix it!
function sendDataToClient () {
  const userObject = {
    handle: 'neo',
    authenticated: false
  };

  function authenticateUser (obj, username) {
    const userObject = {
      handle: 'morpheus',
      authenticated: false
    };

    if (userObject.handle === username) {
      userObject.authenticated = true;
      return userObject;
    }
    return userObject;
  }
  authenticateUser(userObject, 'neo');
  return userObject;
}
