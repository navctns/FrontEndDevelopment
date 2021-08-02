
// BASIC STRUCTURE

// (function() {
//   //Declare private vars & functions
//
//   return {
//     //declare public vars & functions
//   }
// })();

//STANDARD MODULE PATTERN

const UICtrl = (function(){
  //Private vars and functions
  let text = 'Hello World';
  const changeText = function(){
    const element = document.querySelector('h1');
    element.textContent = text;
  }

  return {
    //Public vars & functions
    callChangeText:function(){
      changeText();
      console.log(text);
    }
  }
})();

// UICtrl.callChangeText();
// UICtrl.changeText()//Shows error as it is a private function

//REVEALING MODULE PATTERN

const ItemCtrl = (function(){
  let data = [];

  function add(item){
    data.push(item);
    console.log('Item Added ...');
  }

  function get(id){
    return data.find(item => {
      return item.id === id;
    })
  }

  return {
    add:add,
    get:get,
  }
})();

ItemCtrl.add({id:1,name:'John'});
ItemCtrl.add({id:2,name:'Joy'});
console.log(ItemCtrl.get(1));
console.log(ItemCtrl.get(2));
