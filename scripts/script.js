function Palindrome(x) {
    
    if (x < 0) {
      return false;
    }

    let reversedStr = x.toString().split("").reverse().join("");
  
    let reversedNum = parseInt(reversedStr);
  
    if (reversedNum === x) {
      return true;
    } else {
      return false;
    }
  }
//   Palindrome(434)
  console.log(Palindrome(434))


  //================================================

  
const array = [1, 1, 3, 3, 5, 5, 7, 9, 9, 0, 0]
function findUniElement(array) {
    for (let i = 0; i < array.length; i += 2) {
      if (array[i] !== array[i+1]) {
        return array[i];
      }
    }
    return null; // no unique element found
  }
  const uniElement = findUniElement(array);
  console.log(uniElement);
  

  