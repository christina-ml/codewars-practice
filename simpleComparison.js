/*
Write a function that will compare two values, one
will be a number and one will be a string. Return
true if they are the same character (regardless of
their different data types) and return false if
they are not.

To make this challange harder and to promp the challenger
to read up about coercion I have disabled some of the
built in methods including .toString(), .join(),
.split(), parseInt and .Number().
*/


// My Solution:
function add(a, b){
    // code here
    // compare (number, string)
    if (a == b) {
      return true // if same character, return true
    } else {
      return false; // return false if they are not
    }
  }
  



// Sample Tests:
/*
describe("Tests", () => {
  it("test", () => {
 Test.assertEquals(add('1', 1), true);
 Test.assertEquals(add(1, '1'), true);
 Test.assertEquals(add(1, '0'), false);
 Test.assertEquals(add('11', 11), true);
 Test.assertEquals(add(12, 12), true);
 Test.assertEquals(add(120, '021'), false);
  });
});
*/