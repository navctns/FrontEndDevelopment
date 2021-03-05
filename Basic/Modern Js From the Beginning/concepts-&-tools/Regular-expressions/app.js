
let re;

re = /hello/;
reNoCase = /hello/i; // i = case insensitive
reGlobal = /hello/g; // g = all instances in paragraph
// re = RegExp(re);
// console.log(re);
// console.log(re.source);

// exec() - Return result in array or null
// const result = re.exec('Yep Hello world');
// console.log(result)
// console.log(result[0]);
// console.log(result.index);

//Test() - Returning true or false
// const result = re.test('Hello');
// console.log(result);
// const result1 = reNoCase.test('Hello');
// console.log(result1);

//match() - Return result array or null
// const str = 'hello there hello abcd hello';
// const result = str.match(reGlobal);
// console.log(result);

//search() - Return index of the first match

// const str = 'hi hello there';
// const result = str.search(re);
// console.log(result);

//replace() - Return new string with some or all matches of a pattern

const str = 'hello there';
const newStr = str.replace(re, 'hi');
console.log(newStr);
