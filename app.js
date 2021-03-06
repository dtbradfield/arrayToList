//Create arrayToList function
let arrayToList = array => {
    //create empty list
    let list = null;
    //loop through array and make into a list
    for ( let i = array.length - 1; i >= 0; i-- ) {
        list = {value: array[i], rest: list}
    };
    //return newly built list
    return list;
};






//The following was taken from EloquentJS ebook:
console.log(arrayToList([10, 20]));
// → {value: 10, rest: {value: 20, rest: null}}
//console.log(listToArray(arrayToList([10, 20, 30])));
// → [10, 20, 30]
//console.log(prepend(10, prepend(20, null)));
// → {value: 10, rest: {value: 20, rest: null}}
//console.log(nth(arrayToList([10, 20, 30]), 1));
// → 20