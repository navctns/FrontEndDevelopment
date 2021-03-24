
//Controllers and Data Structures

//Storage Controller
const StorageCtrl = (() => {

  //Public methods
  return{
    storeItem:(item) => {
      let items = [];
      //check if any items in local storage
      if(localStorage.getItem('items') === null){
        items = [];
        //push new item
        items.push(item);
        //set LS
        localStorage.setItem('items',JSON.stringify(items));
      }else{
        //Get already in LS
        items = JSON.parse(localStorage.getItem('items'));
        //push new item
        items.push(item);
        //Reset LS
        localStorage.setItem('items',JSON.stringify(items));
      }
    },

    //Get Items from Storage
    getItemsFromStorage:() => {
      let items;
      if(localStorage.getItem('items') === null){
        items = [];
      }else{
        items = JSON.parse(localStorage.getItem('items'));
      }
      return items;
    },
    setItems:(items) => {
      localStorage.setItem('items',JSON.stringify(items));
    },
    updateItemStorage:(updatedItem) =>{
      //Get items from local storage
      let items = JSON.parse(localStorage.getItem('items'));
      //Loop through items
      items.forEach((item,index) =>{
        if(updatedItem.id === item.id){
          //Replace with new item
          items.splice(index,1,updatedItem);
        }
      });
      localStorage.setItem('items', JSON.stringify(items));
    },
    deleteItemFromStorage:(id) =>{
      //Get items from local storage
      let items = JSON.parse(localStorage.getItem('items'));
      //Loop through items
      items.forEach((item,index) =>{
        if(id === item.id){
          //Remove Item item
          items.splice(index,1);
        }
      });
      localStorage.setItem('items', JSON.stringify(items));
    }
  }
})();

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
    // items: [
    //   // {id:0,name:'Steak Dinner',calories:1200},
    //   // {id:1,name:'Cookie',calories:1200},
    //   // {id:2,name:'Egg',calories:1200},
    //
    // ],
    items:StorageCtrl.getItemsFromStorage(),
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
    updateItem:(name,calories) => {
      //Calories to number
      calories = parseInt(calories);
      let found = null;
      data.items.forEach(item => {
        if(item.id === data.currentItem.id){
          item.name = name;
          item.calories = calories;
          found = item;
        }
      });
      // StorageCtrl.setItems(data.items);//my method
      return found;
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
    },
    deleteItem: (id) => {
      //Get Ids
      const ids = data.items.map(item => {
        return item.id;
      });
      //Get the index
      const index = ids.indexOf(id);
      //Remove item
      data.items.splice(index,1);
      //Delete from storage
      // StorageCtrl.setItems(data.items);

    },
    //Clear Items
    clearAllItems: () => {
      data.items = [];
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
    clearBtn:'.clear-btn',
    listItems:'#item-list li',
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
      });
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
    deleteListItem: function(id){
      const itemID = `#item-${id}`;
      const item = document.querySelector(itemID);
      item.remove();
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
    },
    updateListItem:(item) => {
      let listItems = document.querySelectorAll(UISelectors.listItems);
      //Turn node list into array
      listItems = Array.from(listItems);
      listItems.forEach(listItem => {
        const itemID = listItem.getAttribute('id');
        if(itemID === `item-${item.id}`){
          document.querySelector(`#${itemID}`).innerHTML = `
              <strong>${item.name}:</strong>
              <em>${item.calories}Calories</em>
              <a href="#" class="secondary-content">
                <i class="edit-item fa fa-pencil"></i>
              </a>
          `
        }
      });
    },
    removeItems:() => {
      let listItems = document.querySelectorAll(UISelectors.listItems);
      //From node list to array
      listItems = Array.from(listItems);
      listItems.forEach(item =>{
        item.remove();
      });
    }
  }
})();

//App Controller
const App = ((ItemCtrl,StorageCtrl,UICtrl) => {
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
    //Back Button Event
    document.querySelector(UISelectors.backBtn).addEventListener('click',UICtrl.clearEditState);
    //Delete Button event
    document.querySelector(UISelectors.deleteBtn).addEventListener('click',itemDeleteSubmit);
    //Clear Items Event
    document.querySelector(UISelectors.clearBtn).addEventListener('click', clearAllItemsClick);
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

      //Store in Local Storage
      StorageCtrl.storeItem(newItem);

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
    // console.log('update');
    //Get Item Input
    const input = UICtrl.getItemInput();
    //Update Item
    const updatedItem = ItemCtrl.updateItem(input.name,input.calories);
    //Update UI
    UICtrl.updateListItem(updatedItem);
    //Get toatal calories
    const totalCalories = ItemCtrl.getTotalCalories();
    //Add total calories to UI
    UICtrl.showTotalCalories(totalCalories);

    //UPdate Local Storage
    StorageCtrl.updateItemStorage(updatedItem);
    //Clear Edit state
    UICtrl.clearEditState();
    e.preventDefault();
  }
  //Delete Button Event
  const itemDeleteSubmit = (e) => {
    //Get Current Item
    const currentItem = ItemCtrl.getCurrentItem();
    //Delete From Data Structure
    ItemCtrl.deleteItem(currentItem.id);
    //Delete from UI
    UICtrl.deleteListItem(currentItem.id);
    //Delete from LS
    StorageCtrl.deleteItemFromStorage(currentItem.id);
    //Get toatal calories
    const totalCalories = ItemCtrl.getTotalCalories();
    //Add total calories to UI
    UICtrl.showTotalCalories(totalCalories);
    //Clear Edit state
    UICtrl.clearEditState();

  };
  //Clear all Items click
  const clearAllItemsClick = () => {
    //Delete all items from the Data Structure
    ItemCtrl.clearAllItems();
    //Remove from UI
    UICtrl.removeItems();
    //Get toatal calories
    const totalCalories = ItemCtrl.getTotalCalories();
    //Add total calories to UI
    UICtrl.showTotalCalories(totalCalories);
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
})(ItemCtrl, StorageCtrl, UICtrl);

//Initialize app
App.init();
console.log(ItemCtrl.logData());
