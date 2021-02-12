
// WINDOW METHODS/ OBJECTS/ PROPERTIES

//Alert

// window.alert('Hello World');
// alert('Hello World');

//Prompt

// const input = prompt();
// alert(input);

// Confirm
//ask for something(like when deleting something,...)

// if(confirm('Are you sure')){
//   console.log('YES');
// } else {
//   console.log('NO');
// }

// let val;

//outer height and width

val = window.outerHeight;
val = window.outerWidth;
console.log(val);

//InnerHeight and outerWidth

val = window.innerHeight;
val = window.innerWidth;

//Scroll points

val = window.scrollY;

val=window.location.hostname;
val = window.location.port;
val = window.location.search;
// window.location.href = 'http://qwant.com';
// window.history.go();
window.history.go(-1);
// console.log(val);
val = window.navigator;
val = window.navigator.platform;
val = window.navigator.appName;
val = window.navigator.appVersion;
val = window.navigator.language;
console.log(val);
