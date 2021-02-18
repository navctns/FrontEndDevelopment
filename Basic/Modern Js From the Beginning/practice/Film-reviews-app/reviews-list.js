
reviews = JSON.parse(localStorage.getItem('reviews'));
console.log(reviews);

reviewTable = document.querySelector('.table');

tableBody = reviewTable.querySelector('tbody');
console.log(tableBody);

let tableContent = '';
reviews.forEach(function(item,index){
  // console.log(item,index);
   tableContent = tableContent +
    `<tr>
      <th>${index+1}</th>
      <td>${item.movie}</td>
      <td>${item.director}</td>
      <td>${item.rating}%</td>
      <td>${item.reviewText}</td>
      <td><a href="#" class="delete-item"><i class="far fa-edit"></i></a></td>
      <td><a href="#" class="delete-item"><i class="fas fa-trash-alt"></i></a></td>
    </tr>`
    console.log(tableContent);
});

tableBody.innerHTML = tableContent;

document.body.addEventListener('click',function(e){
  // console.log(e.target);
  if(e.target.parentElement.classList.contains('delete-item')){
    console.log(e.target.parentElement);
    e.target.parentElement.parentElement.parentElement.remove();
    console.log('found');
  }
  // e.preventDefault();
});

console.log(tableContent);
