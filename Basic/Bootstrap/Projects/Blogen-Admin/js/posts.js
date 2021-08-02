
buttonDel = document.querySelector('.fa-trash');
console.log(buttonDel.parentElement.parentElement);
dataRow = buttonDel.parentElement.parentElement.parentElement;
console.log(dataRow);
// dataRow.remove();
// buttonDel.addEventListener('click', event => {
//   // preventdefault;
//   parent = buttonDel.parentElement.parentElement.parentElement;
//   console.log(parent);
//   parent.remove();
//   preventdefault;
// });
