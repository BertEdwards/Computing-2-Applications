const List = Object.create(null);

const new_array = Array;

// PROVIDED
List.sequence = (n) => new_array(n).fill().map((ignore, k) => k);

List.transpose = (list) => list[0].map(
    (ignore, colIndex) => list.map((row) => row[colIndex])
);

//TASK

//Exercise 1
List.range = (start, end, step) => new_array((end - start)/step).fill().map((ignore, k) => k*0 + start + k*step);

//Exercise 2
List.curry_map = f => arr => arr.map(f);
List.curry_includes = f => arr => arr.includes(f);
List.curry_filter = f => arr => arr.filter(f);
List.curry_every = f => arr => arr.every(f);
List.curry_some = f => arr => arr.some(f);
List.curry_flatMap = f => arr => arr.flatMap(f);

//Exercise 3
List.reject = f => arr => arr.filter(k => !f(k));

//Exercise 4
List.first = arr => arr[0];
List.last = arr => arr[arr.length -1];

//Exercise 5
List.rest = arr => arr.shift();

//Exercise 6
List.most = arr => arr.pop();

//Exercise 7
List.zip = f => arr1 => arr2 => new_array(arr1.length).fill().map(f);


debugger;
export default Object.freeze(List);

const even_check = (x) => x %2 === 0;
const reject_test = List.reject(even_check);