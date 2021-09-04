
document.querySelector('#get-plant').addEventListener('submit', getPlantname);

// function getPlantname(e){
//
//   const common_name = document.querySelector('#common_name').value;
//
//   xhr = new XMLHttpRequest();
//
//   xhr.open('GET','https://trefle.io/api/v1/plants?token=j_5TH8oZMmOST0vYAY7PFjqUz-Qthf77NKhRJhJ6Fl4',true);
//   xhr.setRequestHeader('Content-type','application/json');
//   xhr.setRequestHeader('Access-Control-Allow-Origin', '*');
//   xhr.onload = function(){
//     if(this.status === 200){
//       console.log(this.responseText);
//     }
//   }
//   xhr.send();
//   e.preventDefault();
// }


//FETCH
async function getPlantname(e){

  const common_name = document.querySelector('#common_name').value;

  await fetch('https://trefle.io/api/v1/plants?token=j_5TH8oZMmOST0vYAY7PFjqUz-Qthf77NKhRJhJ6Fl4')
      .then(response => response.json())
      .then(data => console.log(data));
  e.preventDefault();
}
