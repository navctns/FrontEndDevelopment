
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
      {id:0,name:'Steak Dinner',calories:1200},
      {id:1,name:'Cookie',calories:1200},
      {id:2,name:'Egg',calories:1200},

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
    }
  }

})();
//UI Controller
const UICtrl = (() => {
  console.log('UI Controller');

  const UISelectors = {
    itemList:'#item-list'
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
    }
  }
})();

//App Controller
const App = ((ItemCtrl,UICtrl) => {
  return{
    init:function(){
      console.log('Initializes App')
      //Fetch Items from Data Structure
      const items = ItemCtrl.getItems();
      //Populate List with Items
      UICtrl.populateItemList(items);
    }
  }
})(ItemCtrl,UICtrl);

//Initialize app
App.init();
console.log(ItemCtrl.logData());
