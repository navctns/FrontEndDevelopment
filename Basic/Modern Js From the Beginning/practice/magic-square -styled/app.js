
let row1Sum,
    row2Sum,
    row3Sum,
    col1Sum,
    col2Sum,
    col3Sum,
    leftCrossSum,
    rightCrossSum;

//UI Elements

item11 = document.querySelector('#item11');
item12 = document.querySelector('#item12');
item13 = document.querySelector('#item13');

item21 = document.querySelector('#item21');
item22 = document.querySelector('#item22');
item23 = document.querySelector('#item23');

item31 = document.querySelector('#item31');
item32 = document.querySelector('#item32');
item33 = document.querySelector('#item33');

inputNum = document.querySelector('#input-numbers');
gameResult = document.querySelector('.game-result');
const allInputs = document.querySelectorAll('.input-item');


//Submit event
inputNum.addEventListener('click', function(e){

row1Sum = 0;
row2Sum = 0;
row3Sum = 0;
col1Sum = 0;
col2Sum = 0;
col3Sum = 0;
leftCrossSum =0;
rightCrossSum = 0;
  // let item11 = parseInt(item11.value),
  //     item12 = parseInt(item12.value),
  //     item13 = parseInt(item13.value),
  //     item21 = parseInt(item21.value),
  //     item22 = parseInt(item22.value),
  //     item23 = parseInt(item23.value),
  //     item31 = parseInt(item31.value),
  //     item32 = parseInt(item32.value),
  //     item33 = parseInt(item33.value),



// COL SUM
//column items
const col1Items = document.querySelectorAll('.col-1');
const col2Items = document.querySelectorAll('.col-2');
const col3Items = document.querySelectorAll('.col-3');

// const col1ItemsArray = Array.from(col1Items);
col1Items.forEach(function(item){
  col1Sum = parseInt(col1Sum);
  col1Sum += parseInt(item.value);
});
console.log('col1 sum',col1Sum);

// const col1ItemsArray = Array.from(col1Items);
col2Items.forEach(function(item){
  col2Sum = parseInt(col2Sum);
  col2Sum += parseInt(item.value);
});
console.log('col2 sum',col2Sum);

// const col1ItemsArray = Array.from(col1Items);
col3Items.forEach(function(item){
  col3Sum = parseInt(col3Sum);
  col3Sum += parseInt(item.value);
});
console.log('col3 sum',col3Sum);

//ROW SUM

const row1Items = document.querySelector('#row1');
const row2Items = document.querySelector('#row2');
const row3Items = document.querySelector('#row3');
// console.log(row1Items);
const row1Children = row1Items.children;
const row2Children = row2Items.children;
const row3Children = row3Items.children;

console.log(row1Children);

//ROW1 SUM
const row1ChildrenArray = Array.from(row1Children);
row1ChildrenArray.forEach(function(item){
  // console.log(item.querySelector('input').value);
  row1Sum = parseInt(row1Sum);
  row1Sum += parseInt(item.querySelector('input').value);//sum of a row
});
console.log(row1Sum);

//ROW2 SUM
const row2ChildrenArray = Array.from(row2Children);
row2ChildrenArray.forEach(function(item){
  // console.log(item.querySelector('input').value);
  row2Sum = parseInt(row2Sum);
  row2Sum += parseInt(item.querySelector('input').value);//sum of a row
});
console.log(row2Sum);

//ROW 3 SUM
const row3ChildrenArray = Array.from(row3Children);
row3ChildrenArray.forEach(function(item){
  // console.log(item.querySelector('input').value);
  row3Sum = parseInt(row3Sum);
  row3Sum += parseInt(item.querySelector('input').value);//sum of a row
});
console.log(row3Sum);
console.log(row1Sum , typeof row1Sum, row2Sum ,typeof row2Sum, row3Sum ,typeof row3Sum, col1Sum ,typeof col1Sum, col2Sum, typeof col2Sum, col3Sum, typeof col3Sum);

//CROSS SUMS 
const leftCrossEls = document.querySelectorAll('.left-cross');
const rightCrossEls = document.querySelectorAll('.right-cross');
leftCrossEls.forEach(function(item){
  leftCrossSum += parseInt(item.value);
});
console.log('left sum', leftCrossSum);
rightCrossEls.forEach(function(item){
  rightCrossSum += parseInt(item.value);
});
console.log('right sum', rightCrossSum);




let commonSum = row1Sum;
// if(parseInt(row1Sum) === parseInt(row2Sum) === parseInt(row3Sum) === parseInt(col1Sum) === parseInt(col2Sum) === parseInt(col3Sum)) {
if ( (row1Sum === commonSum) && (row2Sum === commonSum) && (row3Sum === commonSum) && (col1Sum === commonSum) && (col2Sum === commonSum) && (col3Sum === commonSum) && (leftCrossSum === commonSum) && (rightCrossSum === commonSum)){
  console.log('Well Done..YOU WON');
  gameResult.textContent = 'Well Done..YOU WON'
  gameResult.style.color = 'green';
  // document.body.style.backgroundColor = '#9fb8ad';
  allInputs.forEach(function(item){
    item.style.borderColor = 'green';
  })
}
else{
  gameResult.textContent = 'Incorrect Entry..! Try Again';
  gameResult.style.color = 'red';
  allInputs.forEach(function(item){
    item.style.borderColor = 'red';
  })
  setTimeout(resetInputFields,2000);

}
if (row1Sum === row2Sum){
  console.log("Well Done");
}
// e.preventDefault();
});

function resetInputFields(){
  gameResult.textContent = '';
  allInputs.forEach(function(item){
    item.style.borderColor = '#ddd';
})

}