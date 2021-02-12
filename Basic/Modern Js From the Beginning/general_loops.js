
//FOR LOOP

for(let i=0; i<10; i++){
  // console.log(i);

  if(i==7){
    console.log('Seven is my Favourite number');
    continue;//going to next iteration
  }
  if (i==8){
    console.log('Stopping on 8');
    break;
  }
  console.log('Number '+ i);

}

//generally for loop is used when you exactly know howmany iterations are there
//while loop is used when you don't know the number of iterations

//While LOOP

let i = 0;
let arr = [1,4,6,7,22,33,14,76,45,22,99,128];
while(i<10){
  console.log('Number '+ i);
  i++;
}

i=0;
console.log(arr[0]);
while(i<=arr.length){
  // console.log('***');
  if (arr[i] > 50){
    console.log(arr[i] + ' is greater than 50');
    }
  i++;
}

// Do while

i = 0;

do{
  console.log('Number' +i);
  i++;
}
while(i<8);

//ARRAY iterations

const cars = ['Ford','Chery','Honda','Toyota'];

for(let i=0; i<cars.length; i++){
  console.log(cars[i]);
}

//FOREACH

cars.forEach(function(car){
  console.log(car);
});

//MAP

const users = [
  {id:1, name:'John'},
  {id:2, name:'Sara'},
  {id:3, name:'Karen'},
];

const ids_list = users.map(function(user){
  return user.id;
});

console.log(ids_list);

//FOREACH other Arguments

cars.forEach(function(car,index){
  console.log(`${index}:${car}`)
});

// foreach input the entire ARRAY

cars.forEach(function(car,index,array){
  console.log(`${index}: ${car}`);
  console.log(array);
});

//Loop for Objects

const user = {
  firstName:'John',
  lastName:'Doe',
  age:40,
}

for(let x in user){
  // console.log(x);//keys
  console.log(`${x} : ${user[x]}`);
}
