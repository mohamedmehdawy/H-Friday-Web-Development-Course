/**
 * this function filter the gaven array and return array with only even numbers
 * @param target - the array will filter it
 * @return filtered array with only even numbers
 */
function getEven(target) {
    // evenNumbers: the array will store only even numbers
    const evenNumbers = [];

    /*
        each iterate will return sequence element from target array
            first iterate ele will be first element of target
            second iterate ele will be second element of target and so on
    */
    for (let ele of target) {
        // check if the current element is even or not, if true append current element to evenNumbers
        if (ele % 2 != 0) {
            evenNumbers.push(ele);
        }
    }

    // return evenNumbers
    return evenNumbers;
}
// arr: the array gaven from user
let arr = [13, 23, 12, 45, 22, 48, 66, 100];

// output
console.log("even numbers: ", getEven(arr));