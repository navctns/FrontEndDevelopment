
let re;

// re = /hello/;
// reNoCase = /hello/i; // i = case insensitive
// reGlobal = /hello/g; // g = all instances in paragraph
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

// const str = 'hello there';
// const newStr = str.replace(re, 'hi');
// console.log(newStr);

re = /hello/i;

let str;
str = 'Hello world';

function reTest(re,str){
  if(re.test(str)){
    console.log(`${str} matched ${re.source}`);
  }else{
    console.log(`${str} does't match ${re.source}`);
  }
}
// reTest(re,str);

//META CHARACTER SYMBOLS
//Starts with
re = /^h/i; //Must start with h
// reTest(re,str);
str = 'Garry Hello there';
// reTest(re,str);

//Ends with
re = /d$/; //Ends with d
// reTest(re,str);
str = 'direct paths are not found';
// reTest(re,str);

re = /world$/i;
str = 'Better World';
// reTest(re,str);

//Matches any one character
re = /^h.llo/i;
str = 'Garry Hello there';
// reTest(re,str);
// str = 'Hello Garry';
// reTest(re,str);

// str = 'hrllo harry';
// reTest(re,str);

str = 'hllo';
// reTest(re,str);

re = /^h*llo$/i;
// reTest(re,str);

//Optional
re = /gre?a?y/; //e and a are optional
// str = 'gray';
// str = 'grey';
// str = 'gry';
// str = 'griy';//Doesnt match
// reTest(re,str); \

//Escaping character
//string to match
re = /gre?a?y?/i;
str = 'Gra4';
// reTest(re,str);

re = /gre?a?y\?/i; // Here last ? taken as string literal as \ is escaping char
str = 'Gra4';
// reTest(re,str);

// Brackets [] - character sets

re = /gr[ea]y/i; // Must be an a or e
// str = 'gray'; // matches
// str = 'grey'; // matches
// str = 'gry'; // does not match
// reTest(re,str);

re = /[GF]ray/; // Must be G or F
// str = 'Gray';//matches
// str = 'Fray';//matches
// str = 'fray';//does not match
// reTest(re,str);

re = /[^GF]ray/; // Anything except G or F
str = 'Gray';//Does not match
str = 'Xray';// Matches
// reTest(re,str);

//INTERVALS
re = /[A-Z]ray/; // Match any uppercase letters
str = 'Xray';//matches
str = 'xray';//j does not match
// reTest(re,str);

//NUMBER RANGES
re = /[0-9]ray/;// Matches any digit
// re = /[0-9][0-9]ray/;
// str = '8ray';//Matches
str = '10ray'; // matches with '0ray'
// reTest(re,str);
// console.log(re.exec(str));

// Braces for multiple
re = /Hel{2}o/;// Must occur exacty m(here 2) amount of time
str = 'Hello';//matched
str = 'Helo';//Does not match
// reTest(re,str);
// console.log(re.exec(str));

re = /Hel{2,4}o/; // Must occur between m and n (2 n 4 here)
str = 'Hello';//matches
str = 'Hellllo';//matches
str = 'helo';//does not match
str = 'helllllo';//does not match
// reTest(re,str);
// console.log(re.exec(str));

re = /Hel{2,}o/; // Mininum of m occurances
str = 'Hello';
// str = 'Helllo';
str = 'Helo';//does not match
// reTest(re,str);
// console.log(re.exec(str));

//PARENTHESIS
re = /[0-9]x{3}/;
str = '3x3x3x';//does not match
str = '9xxx';
// reTest(re,str);
// console.log(re.exec(str));
re = /([0-9]x){3}/;
str = '4x5x8x';// matches
str = '4x4x5x4x';//matches with last 3 items
// reTest(re,str);
// console.log(re.exec(str));

re = /^([0,9]x){3}/;
str = '3x6x8x1x';//does not match should start with exact m instances
// reTest(re,str);
// console.log(re.exec(str));

//Shorthand character classes
re = /\w/; //character alphanumeric or _
str = '3x3x3x';
// reTest(re,str);
// console.log(re.exec(str));

re = /\w+/;//one or more characters(alpahnumeric, _)
str = '2x2x2x';
// reTest(re,str);
// console.log(re.exec(str));

//Non-word character
re = /\W/;//non-word character(!)
str = 'x85';//Not matches
str = '!#';//Matched
// reTest(re,str);
// console.log(re.exec(str));

//DIGIT CHARACTER
re = /\d/;//match any digit
str = '234';
// reTest(re,str);
// console.log(re.exec(str));

re = /\d+/;//Match multiple digits word
str = '368';
// reTest(re,str);
// console.log(re.exec(str));

re = /\D/;//Non digit
str = '233';//not matches
str = 'yu';
// reTest(re,str);
// console.log(re.exec(str));

//SPACE CHARACTER
re = /\s/; // Match white space character
str = 'asd bca';
// reTest(re,str);
// console.log(re.exec(str));

//Non white space char
re = /\S/; //Match non-white space character
// str = '  ';//not match
str = 'srt';//match
// reTest(re,str);
// console.log(re.exec(str));

//WORD BOUNDARY
re = /Hell\b/;// Word and the index
str = 'Hello welcome to Hell';
// reTest(re,str);
// console.log(re.exec(str));

//ASSERTIONS
re = /x(?=y)/;//Match x only if followed by y
str = 'abcx';//doesnt match
str = 'abcxy';//Match
// reTest(re,str);
// console.log(re.exec(str));

re = /x(?!y)/; //Match x only if not followed by y
str = 'abcxy';//does not match
str = 'xac';//match
reTest(re,str);
console.log(re.exec(str));
