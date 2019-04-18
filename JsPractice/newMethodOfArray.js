
// If we want to convert multi dimention arrary in single then we can use arr.flat(upto how many dimention)

// const matrix = [ [1,2], [[[[[[[[[2]]]]]]]]] , [1,5]];

// const flatArray = matrix.flat(Infinity);

// console.log(flatArray);


// Map is used for combine two array 
// flatMap is used for combine two array in same level but it work only till one level
// const nums = [1,3,6];
// const strs = ['one', 'two', 'three'];

// const mapped = nums.map( (val,index) => [val, strs[index]])

// const flatmap = nums.flatMap( (val,index) => [val, strs[index]] )

// console.log(mapped); // [ [ 1, 'one' ], [ 3, 'two' ], [ 6, 'three' ] ]

// console.log(flatmap);// [ 1, 'one', 3, 'two', 6, 'three' ]


// reduce is used for conver array to string
// we can also use it in checking string is palindrom or not
const strs = [ 'h', 's', 'a', 'y'];

let tseb = strs.reduce( (c,v) => c +v );
let best = strs.reduceRight( (c,v) => c + v );

console.log(tseb);
console.log(best);