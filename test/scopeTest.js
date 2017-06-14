var assert = chai.assert;
var expect = chai.expect;


describe('Functions have access to variables in parent scopes.', function() {


  it('Cookie jar should be closed when executing the closeLid function', function() {
    closeLid();
    assert.equal(isCookieJarOpen, false);
  })

  it('Cookie jar should be open when executing the openLid function', function() {
    openLid();
    assert.equal(isCookieJarOpen, true);
  })

  it('outerFunction should return \'Hello World\'', function() {
    assert.equal(outerFunction(), 'Hello World')
  })

  it('sushiRestaurant should return [\'whiteRice Ahi\', \'whiteRice Ahi\']' function() {
    assert.equal(sushiRestaurantReturnValue , ['whiteRice Ahi', 'whiteRice Ahi']);
  })
});

describe('For loops don\'t do not have their own scope', function() {

  it('Should output the correct sum of all matrix elements', function() {
    var myMatrix = [  [1,3,2],
                      [2,1,5],
                      [5,8,1]  ];
    assert.equal(addMatrixElements(myMatrix), 28);
  })

})

describe('References to variables will always look in their own local scope before checking parent scopes.', function() {

  it('Should authenticate the Neo object, and not the Morpheus Object', function() {
    var correctAnswer = {
      handle: 'neo',
      authenticated: true
    }
    assert.deepEqual(sendDataToClient(), correctAnswer)
  })

})
