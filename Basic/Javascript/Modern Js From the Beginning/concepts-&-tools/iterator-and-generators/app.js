
//Iterator example
function nameIterator(names){

  let nextIndex = 0;
  return {
    next:function(){
      return nextIndex < names.length ?
        {value:names[nextIndex++], done:false}
        :{done:true}
    }
  }
}

//create array of names
const namesArr = ['jane','Suni','Kuttu'];

//Init Iterator
const names = nameIterator(namesArr);
console.log(names.next().value)
console.log(names.next().value)
console.log(names.next().value)
console.log(names.next().value)

//Generators

function* sayNames(){

  yield 'Marry';
  yield 'Joseph';
  yield 'John';

}

const name = sayNames();
console.log(name.next().value)
console.log(name.next().value)
console.log(name.next().value)
console.log(name.next().value)
