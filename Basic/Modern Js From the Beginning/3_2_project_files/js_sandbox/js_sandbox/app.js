
let val;

val = document;
val = document.all;
val = document.all[0];
val = document.all.length;
val = document.head;
val = document.body;
val = document.doctype;
val = document.domain;
val = document.URL;
val = document.characterSet;
val = document.contentType;

//select stuff
val = document.forms;
val = document.forms[0];
val = document.forms[0].id;
val = document.links;
val = document.links[0].className;
val = document.links[0].classList;
val = document.images;
val = document.scripts;
val = document.scripts[2].getAttribute('src');

let scripts = document.scripts;
let scriptsArr = Array.from(scripts);
scriptsArr.forEach(function(script){
  console.log(script)
})

console.log(val);

// DOM Selectors for single elements

//document.getElementById()

// console.log(document.getElementById('task-title'));

//Get things from the element

// console.log(document.getElementById('task-title').id);
// console.log(document.getElementById('task-title').className);

// Change Styling

// document.getElementById('task-title').style.background = '#333';
// document.getElementById('task-title').style.color = '#fff';
// document.getElementById('task-title').style.padding = '12px';
// document.getElementById('task-title').style.display = 'none';
// document.getElementById('task-title').style.('text-align') = 'center';

// change the content

// document.getElementById('task-title').textContent = 'Task List';
// document.getElementById('task-title').innerText = 'My Tasks';
// document.getElementById('task-title').innerHTML = '<span style="color:red;background:#eee;padding:5px;">Task List Red</span>';
//
// const taskTitle = document.getElementById('task-title');
// taskTitle.innerHTML = '<span style="color:#f4f4f4;">Tasks List(updated)</span>'
//
// // document.querySelector
//
// console.log(document.querySelector('#task-title'));
// console.log(document.querySelector('.task-title-lg'));
// console.log(document.querySelector('h5'));
//
// document.querySelector('li').style.color = 'red';
// document.querySelector('ul li').style.color = 'blue';
//
// document.querySelector('li').style.color = 'red';
// document.querySelector('li:last-child').style.color = 'blue';
// document.querySelector('li:nth-child(3)').style.color = 'brown';
// document.querySelector('li:nth-child(4)').style.color = 'orange';
// document.querySelector('li:nth-child(5)').textContent = 'Hello World';
// document.querySelector('li:nth-child(odd)').style.background = "#ccc";
// document.querySelector('li:nth-child(even)').style.background = "#f4f4f4";


// const items = document.getElementsByClassName('collection-item');
//
// console.log(items);
//
// console.log(items[0]);
//
// items[0].style.color = 'red';
// items[3].textContent = 'Hello';
//
// const listItems = document.querySelector('ul').getElementsByClassName('collection-item');
// console.log(listItems);

//document.getElementsByTagName

// let lis = document.getElementsByTagName('li');
// // console.log(lis);
// console.log(lis[0]);
// lis[0].style.color = 'red';
// lis[3].textContent = "Hello";

//convert html collection to an Array

// lis = Array.from(lis);
// lis.reverse();
// lis.forEach(function(li,index){
//   console.log(li.className);
//   li.textContent = "Vue js";
// });

// document.querySelectorAll

// const items = document.querySelectorAll('ul.collection li.collection-item');
//
// items.forEach(function(item,index){
//   item.textContent = `${index}: React Js`;
// });
//
// const liOdd = document.querySelectorAll('li:nth-child(odd)');
// const liEven = document.querySelectorAll('li:nth-child(even)');
//
// liOdd.forEach(function(li,index){
//   li.style.background = '#ccc';
// });
//
// for(let i=0; i<liEven.length; i++){
//   liEven[i].style.background = "#f4f4f4";
// }

// TRAVERSING THE DOM ----

// let val;

// const list = document.querySelector('ul.collection');
// const listItem = document.querySelector('li.collection-item:first-child');
//
// val = listItem;
// val = list;
//
// //Get child nodes
//
// val = list.childNodes;//node list
// //line break is considered as text nodes
//
// //get children element nodes
// val = list.children;//html collection
// val = list.childNodes[0];
// val = list.childNodes[0].nodeName;
// val = list.childNodes[1].nodeType;
//
// val = list.children;
// val = list.children[0];
// list.children[1].textContent = 'Front End Dev';
//
// //children of children
//
// val = list.children[3].children;
// list.children[3].children[0].id = 'text-link';
//
// val = list.firstChild;//includes line breaks
// val = list.firstElementChild;
//
// //last child
//
// val = list.lastChild;
// val = list.lastElementChild;
//
// //count child elements
//
// val = list.childElementCount;
//
// //Get parent node
//
// val = listItem.parentNode;
// val = listItem.parentElement;
// val = listItem.parentElement.parentElement;
//
// //Get next sibling
//
// val = listItem.nextSibling;
// val = listItem.nextElementSibling;
//
// console.log(val);

//CREATING ELEMENTS

// const li = document.createElement('li');
//
// //add class
// li.className = 'collection-item';
//
// //Add id
// li.id = 'new-item';
//
// //add attribute
// li.setAttribute('title', 'New Item');
//
// //create text node & append
//
// li.appendChild(document.createTextNode("Vue js apps"));
// //append to child ul
// document.querySelector('ul.collection').appendChild(li);
//
// // create new link element
//
// const link = document.createElement('a');
// link.className = 'delete-item secondary-content'
//
// //add icon html
//
// link.innerHTML = '<i class="fa fa-remove"></i>';
//
// //Append link into li
// li.appendChild(link);
//
//
// //create button
//
// const btn = document.createElement('a');
// //add class
// btn.className = 'btn white black-text';
// //add id
// btn.id = 'edit-button';
// //add text
// btn.appendChild(document.createTextNode("EDIT TASKS"));
// btn.innerHTML = "EDIT TASKS";
// //append to div
//
// document.querySelector('.card-action').appendChild(btn);
// console.log(btn);
// // console.log(li);
//
// //Removing & replacing Elements
//
// //h5 to h2
//
// //create Element
//
// const newHeading = document.createElement('h2');
//
// //id
// newHeading.id = 'task-title';
// //New text node
// newHeading.appendChild(document.createTextNode('Task List'));
//
// //Get the old heading
//
// const oldHeading = document.getElementById('task-title');
//
// //replace child
//
// const cardAction = document.querySelector('.card-action');
//
// //replace
// cardAction.replaceChild(newHeading,oldHeading);

//REMOVE ELEMENT

const lis = document.querySelectorAll('li');
const list = document.querySelector('ul');

//Remove list item

lis[0].remove();

//remove child element

list.removeChild(lis[3]);

// CLASSES & ATTR
// let link;

const firstLi = document.querySelector('li:first-child');
console.log(firstLi.children[0]);
const link = firstLi.children[0];

val = link.className;
val = link.classList;
val = link.classList[0];
link.classList.add('test-class');
val = link;

// console.log(val);
link.classList.remove('test-class');

//Attributes

val = link.getAttribute('href');
val = link.setAttribute('href','http://qwant.com');
link.setAttribute('title', 'Qwant');
val = link.hasAttribute('title');
link.removeAttribute('title');
val = link;
console.log(val);
