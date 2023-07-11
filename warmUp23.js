/**
 * In this warmUp, you must create a digital root function.
 * A digital root is the recursive sum of all the digits in a number. Given n, take the sum of the digits of n.
 * If that value has more than one digit, continue reducing in this way until a single-digit number is produced. This is only applicable to the natural numbers.
 * Here's how it works:
 * digital_root(16)
 * => 1 + 6
 * => 7
 * digital_root(942)
 * => 9 + 4 + 2
 * => 15 ...
 * => 1 + 5
 * => 6
 * digital_root(132189)
 * => 1 + 3 + 2 + 1 + 8 + 9
 * => 24 ...
 * => 2 + 4
 * => 6
 * digital_root(493193)
 * => 4 + 9 + 3 + 1 + 9 + 3
 * => 29 ...
 * => 2 + 9
 * => 11 ...
 * => 1 + 1
 * => 2
 *
 * @function digital_root
 * @param {number} n
 * @return {number}
 */

function each(coll, f) {
  if (Array.isArray(coll)) {
    for (var i = 0; i < coll.length; i++) {
      f(coll[i], i);
    }
  } else {
    for (var key in coll) {
      f(coll[key], key);
    }
  }
};
// implimentation of each function

function reduce(array, f, acc) {
  if (acc === undefined) {
    acc = array[0];
    array = array.slice(1);
  }
  each(array, function (element, i) {
    acc = f(acc, element, i);
  });
  return acc;
};
// implimentaion of reduce function 

function digital_root(n) {
    var result = n;
// declaring a variable to stroe in it n => the number
    var newarr = [];
// declare a variable to store an empty array so i can push to it later after converting the number n to a string and loop hrough that araay 
    var sum = (a,b) => parseInt(a) + parseInt(b)
    // parsInt method
    

    if(n>9){

        newarr=result.toString().split("");
// assign newarr that can take the converted number to a string since we have more than one number and put inside an array to loop
         sum = newarr.reduce(sum);
         // i used reduce because it have each to loop through newarr and excute reduce on sum wich have the parseInt method that make the sum
         // reduce is usfull here since it's one value

         return sum; 
        // return of (n) 
    }
    
}

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// ignore the below code // //
module.exports = digital_root; //
// // // // // // // // //
