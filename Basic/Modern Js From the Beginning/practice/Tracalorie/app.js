
//Controllers and Data Structures

//Storage Controller

//Item Controller
const ItemCtrl = (function(){
  console.log('Item Controller');
  //Item Constructon
  const Item = function(id,name,calories){
    this.id = id;
    this.name = name;
    this.calories = calories;
  }
  //Data Structure/State
  const data = {
    items: [
      // {id:0,name:'Steak Dinner',calories:1200},
      // {id:1,name:'Cookie',calories:1200},
      // {id:2,name:'Egg',calories:1200},

    ],
    currentItem:null,//For updation/deletion actions
    totalCalories: 0,
  }

  //PUBLIC METHODS
  return{
    getItems:() =>{
      return data.items;
    },
    logData:function(){
      return data;
    },
    addItem: (name,calories) => {
      let ID;
      //Create ID
      if(data.items.length>0){
        ID = data.items[data.items.length -1].id + 1;
      }else{
        ID = 0;
      }
      //Calories to Number
      calories = parseInt(calories);
      //Create New Item using Constructor
      const newItem = new Item(ID,name,calories);
      //Add to Items Array
      data.items.push(newItem);
      return newItem;
    },
    getTotalCalories:() => {
      let total = 0;
      data.items.forEach(item => {
        total += item.calories;
      });
      //set total calories to Data Structure
      data.totalCalories = total;
      //Return total
      return data.totalCalories;
    },
    getItemById:(id) => {
      let found = null;
      //Loop through items
      data.items.forEach(item => {
        if(item.id === id){
          found = item;
        }
      });
      return found;
    },
    setCurrentItem:(item) =>{
      data.currentItem = item;
    },
    getCurrentItem: () => {
      return data.currentItem;
    }
  }

})();
//UI Controller
const UICtrl = (() => {
  console.log('UI Controller');

  const UISelectors = {
    itemList:'#item-list',
    addBtn:'.add-btn',
    itemNameInput:'#item-name',
    itemCaloriesInput:'#item-calorie',
    totalCalories:'.total-calories',
    updateBtn:'.update-btn',
    deleteBtn:'.delete-btn',
    backBtn:'.back-btn',
  }
  //PUBLIC METHODS
  return{
    populateItemList:items =>{
      let html = '';
      items.forEach(item => {
        html += `
              <li class="collection-item" id="item-${item.id}">
                <strong>${item.name}:</strong>
                <em>${item.calories}Calories</em>
                <a href="#" class="secondary-content">
                  <i class="edit-item fa fa-pencil"></i>
                </a>
              </li>
            `;
            //Insert List Items
            document.querySelector(UISelectors.itemList).innerHTML = html;
      })
    },
    getSelectors:() => {
      return UISelectors;
    },
    getItemInput: () => {
      return{
        name: document.querySelector(UISelectors.itemNameInput).value,
        calories:document.querySelector(UISelectors.itemCaloriesInput).value,
      }
    },
    addListItem:(item) => {
      //show the list
      document.querySelector(UISelectors.itemList).style.display = 'block';
      //create li Element
      const li = document.createElement('li');
      //Add class
      li.className = 'collection-item';
      //Add Id
      li.id = `item-${item.id}`;
      //Add HTML
      li.innerHTML = `
        <strong>${item.name}:</strong>
        <em>${item.calories}Calories</em>
        <a href="#" class="secondary-content">
          <i class="edit-item fa fa-pencil"></i>
        </a>
      `
      //Insert item
      document.querySelector(UISelectors.itemList).insertAdjacentElement('beforeend',li);

    },
    clearInput: () => {
      document.querySelector(UISelectors.itemNameInput).value = '';
      document.querySelector(UISelectors.itemCaloriesInput).value = '';
    },
    hideList: () => {
      //Hide list when no items are found
      document.querySelector(UISelectors.itemList).style.display = 'none';
    },
    clearEditState:() => {
      UICtrl.clearInput();
      document.querySelector(UISelectors.updateBtn).style.display = 'none';
      document.querySelector(UISelectors.deleteBtn).style.display = 'none';
      document.querySelector(UISelectors.backBtn).style.display = 'none';
      document.querySelector(UISelectors.addBtn).style.display = 'inline';
    },
    showEditState:() => {
      document.querySelector(UISelectors.updateBtn).style.display = 'inline';
      document.querySelector(UISelectors.deleteBtn).style.display = 'inline';
      document.querySelector(UISelectors.backBtn).style.display = 'inline';
      document.querySelector(UISelectors.addBtn).style.display = 'none';
    },
    showTotalCalories: (totalCalories) => {
      document.querySelector(UISelectors.totalCalories).textContent = totalCalories;
    },
    addItemToForm:() =>{
      document.querySelector(UISelectors.itemNameInput).value = ItemCtrl.getCurrentItem().name;
      document.querySelector(UISelectors.itemCaloriesInput).value = ItemCtrl.getCurrentItem().calories;
    }
  }
})();

//App Controller
const App = ((ItemCtrl,UICtrl) => {
  //Load Event Listeners
  const loadEventListeners = () =>{
    // Get UI Selectors from UI Controller
    const UISelectors = UICtrl.getSelectors();
    //Add Item Event
    document.querySelector(UISelectors.addBtn).addEventListener('click',itemAddSubmit);
    //Edit icon click event
    document.querySelector(UISelectors.itemList).addEventListener('click', itemEditClick);
    //Update item event
    document.querySelector(UISelectors.updateBtn).addEventListener('click',itemUpdateSubmit);
    //Disable Submit on enter
    document.addEventListener('keypress',(e)=>{
      if(e.keyCode === 13 || e.which === 13){
        e.preventDefault();
        return false;
      }
    });
  }

  //Add Item Submit
  const itemAddSubmit = (e) => {
    // console.log('Add');
    //Get Form Input from UI Controllers
    const input = UICtrl.getItemInput();
    if(input.name !== '' && input.calorie !==''){
      console.log('Input Not Empty');
      //Add Item
      const newItem = ItemCtrl.addItem(input.name,input.calories);
      console.log(newItem);
      UICtrl.addListItem(newItem);
      //Clear Fields
      UICtrl.clearInput();

      //Get toatal calories
      const totalCalories = ItemCtrl.getTotalCalories();
      //Add total calories to UI
      UICtrl.showTotalCalories(totalCalories);
    }
    e.preventDefault();
  }

  //item edit click event
  const itemEditClick = function(e) {
    if(e.target.classList.contains('edit-item')){
      console.log('edit item');
      //Get list item id (item-0,item-1)
      const listId = e.target.parentNode.parentNode.id;
      console.log(listId);
      //Break into an array
      const listIdArr = listId.split('-');
      const id = parseInt(listIdArr[1]);
      console.log(id);
      //get Item
      const itemToEdit = ItemCtrl.getItemById(id);
      //set Current Item
      ItemCtrl.setCurrentItem(itemToEdit);
      //Add item to form
      UICtrl.addItemToForm();
      //Show Edit State
      UICtrl.showEditState();
    }
  }

  //Update Item submit
  const itemUpdateSubmit = (e) => {
    console.log('update');
  }
  return{
    init:function(){
      //Clear Edit State/ Set Initial State
      UICtrl.clearEditState();
      console.log('Initializes App')
      //Load Event Listeners
      loadEventListeners();
      //Fetch Items from Data Structure
      const items = ItemCtrl.getItems();
      //Check if any items are there
      if(items.length === 0){
        UICtrl.hideList();
      }else{
        //Populate List with Items
        UICtrl.populateItemList(items);
      }
      //Get total Calories
      const totalCalories = ItemCtrl.getTotalCalories();
      //Add total calories to UI
      UICtrl.showTotalCalories(totalCalories);
    }
  }
})(ItemCtrl,UICtrl);

//Initialize app
App.init();
console.log(ItemCtrl.logData());
