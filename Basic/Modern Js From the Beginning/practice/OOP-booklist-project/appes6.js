
class Book {
  //Book class
  constructor(title,author,isbn){
    this.title = title;
    this.author = author;
    this.isbn = isbn;
  }

}

class UI {
  //UI functions
  addBookToList(book){
    const list = document.getElementById('book-list');
    //create element
    const row = document.createElement('tr');
    console.log(row);
    row.innerHTML = `
              <td>${book.title}</td>
              <td>${book.author}</td>
              <td>${book.isbn}</td>
              <td><a href="#" class="delete"><i class="fa fa-trash-alt"></i></a></td>
            `
    list.appendChild(row);
  }

  showAlert(message,className){
    //create div
    const div = document.createElement('div');

    //add class
    div.className = `alert ${className}`;

    //Add text
    div.appendChild(document.createTextNode(message));

    //Get parent
    const container = document.querySelector('.container');
    const form = document.querySelector('#book-form');
    container.insertBefore(div,form);
    //Timeour disappear
    setTimeout(function(){
      document.querySelector('.alert').remove();
    },3000);
  }

  deleteBook(target){
    if(target.parentElement.className ==='delete'){
      console.log('delete');
      target.parentElement.parentElement.parentElement.remove();
    }
  }
  clearFields(){
    document.getElementById('title').value = '';
    document.getElementById('author').value = '';
    document.getElementById('isbn').value = '';
  }

}

//local Storage class

class Store{

  static getBooks(){
      //fetch from local storage
      let books;
      if(localStorage.getItem('books') === null){
        books = [];
      }else{
        books = JSON.parse(localStorage.getItem('books'));
      }
      return books;
  }

  static displayBooks(){
    //Display books on dom
    const books = Store.getBooks();
    const ui = new UI;
    books.forEach(function(book){
      //add book to ui
      ui.addBookToList(book);
    })
  }

  static addBook(book){
    //add to LS
    const books = Store.getBooks();
    // console.log(books);
    books.push(book);
    localStorage.setItem('books', JSON.stringify(books));
  }

  static removeBook(isbn){
    console.log(isbn);
    const books = Store.getBooks();
    books.forEach(function(book,index){
      if(book.isbn === isbn){
        books.splice(index,1);
      }
    });
    localStorage.setItem('books', JSON.stringify(books));
  }

}

/// EVENT LISTNERS

//DOM Load Events
document.addEventListener('DOMContentLoaded', Store.displayBooks);

// Event Listener

document.getElementById('book-form').addEventListener('submit', function(e){
  //Get form values
  const title = document.getElementById('title').value;
  const author = document.getElementById('author').value;
  const isbn = document.getElementById('isbn').value;
  // console.log(title,author,isbn);

  //Create book
  const book = new Book(title,author,isbn);
  console.log(book);

  //Add to table
  //Instantiate UI
  ui = new UI();

  if(title === '' || author === '' || isbn === ''){
    // console.log('Please fill all fields');
    //Error alert
    ui.showAlert('Please fill in all fields','error');
  }
  else {
    ui.addBookToList(book);

    //Add to LS
    Store.addBook(book);
    //show success alert
    ui.showAlert('Book Added','success');
    ui.clearFields();
  }

  e.preventDefault();
})

//Event Listener for delete
document.getElementById('book-list').addEventListener('click', function(e){

  // console.log('delete event listener');
  //Instantiate UI
  const ui = new UI();
  ui.deleteBook(e.target);
  //Remove from LS
  Store.removeBook(e.target.parentElement.parentElement.previousElementSibling.textContent);
  ui.showAlert('Book Removed!','success');
  e.preventDefault();
})
