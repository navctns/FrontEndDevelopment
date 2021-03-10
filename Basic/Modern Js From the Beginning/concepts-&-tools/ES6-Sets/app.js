
//SETS - Store unique values of any type

const set1 = new Set();

//Add Values to set
set1.add(100);
set1.add('A String');
set1.add({name:'John'});
set1.add(true);
set1.add(100);
// console.log(set1);

const set2 = new Set([1, true, 'String']);
// console.log(set2);

//GET COUNT
console.log(set1.size);

//check for values
// console.log(set1.has(100));
// console.log(set1.has(50 + 50));
//
// console.log(set1.has({name:'John'}));//Shows false since
// It is not a primitive type, Its a reference value(to some location in memory)
//it is not  stored in the heap
// console.log({name:'John'} === {name:'John'});//same as above

//Delete from the set

set1.delete(100);
// console.log(set1);

//ITERATING THROUGH SETS

//For .. of
// for(let item of set1){
//   console.log(item);
// }
// //Same as
// for(let item of set1.keys()){
//   console.log(item);
// }
// //Same as
// for(let item of set1.values()){
//   console.log(item);
// }

//forEach Loop
set1.forEach(value => {
  console.log(value);
});

//Convert set to array
const setArr = Array.from(set1);
console.log(setArr);
