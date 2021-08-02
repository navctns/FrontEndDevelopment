
//Defing UI vars

const form = document.querySelector('#task-form');
const taskList = document.querySelector('.collection');
const clearBtn = document.querySelector('.clear-task');
const filter = document.querySelector('#filter');
const taskInput = document.querySelector('#task');

//Load all event Listeners

loadEventListeners();

//Load all Event Listeners

function loadEventListeners(){

  //DOM load event
  //fires after DOM content is loaded
  document.addEventListener('DOMContentLoaded', getTasks);

  //add task event
  form.addEventListener('submit', addTask);

  //remove task
  taskList.addEventListener('click', removeTask);

  //clear tasks
  clearBtn.addEventListener('click', clearTasks);

  //filter through the task
  filter.addEventListener('keyup', filterTasks);
}

function getTasks(){
  let tasks;
  if(localStorage.getItem('tasks') === null){
    tasks = [];
  }else{
    tasks = JSON.parse(localStorage.getItem('tasks'));
  }

  tasks.forEach(function(task){

    //create li element
    const li = document.createElement('li');
    //add class
    li.className = 'collection-item';

    //create text node and append to li
    li.appendChild(document.createTextNode(task));

    //create new link item
    const link = document.createElement('a');

    //add class
    link.className = 'delete-item secondary-content';

    //add icon html
    link.innerHTML = '<i class="fa fa-trash"></i>';
    li.appendChild(link);

    //append to ul
    console.log(li);
    taskList.appendChild(li);

  })
}

//Add Task
function addTask(e){

  if(taskInput.value === ''){
    alert('Add a task');
  }

  //create li element
  const li = document.createElement('li');
  //add class
  li.className = 'collection-item';

  //create text node and append to li
  li.appendChild(document.createTextNode(taskInput.value));

  //create new link item
  const link = document.createElement('a');

  //add class
  link.className = 'delete-item secondary-content';

  //add icon html
  link.innerHTML = '<i class="fa fa-trash"></i>';
  li.appendChild(link);

  //append to ul
  console.log(li);
  taskList.appendChild(li);

  //store in local storage
  storeTaskInLocalStorage(taskInput.value);

  //clear input
  taskInput.value = '';
  e.preventDefault();
}

//store in local storage
function storeTaskInLocalStorage(task){

  let tasks;
  if(localStorage.getItem('tasks') === null){
    tasks = [];
  }else{
    tasks = JSON.parse(localStorage.getItem('tasks'));
  }
  tasks.push(task);
  localStorage.setItem('tasks', JSON.stringify(tasks));
}

//remove task

function removeTask(e){

  // console.log(e.target);
  if(e.target.parentElement.classList.contains('delete-item')){
    // console.log(e.target);
    if(confirm('Confirm Delete ?')){
      e.target.parentElement.parentElement.remove();
      removeTaskFromLocalStorage(e.target.parentElement.parentElement);
    }
  }
}

function removeTaskFromLocalStorage(taskItem){
  let tasks;
  if(localStorage.getItem('tasks') === null){
    tasks = [];
  }else{
    tasks = JSON.parse(localStorage.getItem('tasks'));
  }
  tasks.forEach(function(task,index){
    if(taskItem.textContent === task){
      tasks.splice(index,1);
    }
  });
  localStorage.setItem('tasks', JSON.stringify(tasks));
}

function clearTasks(e){
  // taskList.innerHTML = '';//method 1 bit slow

  //method to faster compared
  while(taskList.firstChild){
    taskList.removeChild(taskList.firstChild);
  }
  clearTasksFromLocalStorage();
}

function clearTasksFromLocalStorage(){

  localStorage.clear();
}

function filterTasks(e){

  const text = e.target.value.toLowerCase();
  console.log(text);

  document.querySelectorAll('.collection-item').forEach(
    function(task){
      const item = task.firstChild.textContent;
      //-1 refers doesnt match the items
      if(item.toLowerCase().indexOf(text) != -1){
        task.style.display = 'block';
      }
      else {
        task.style.display = 'none';
      }
    }
  )
}
