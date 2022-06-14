//Book constructor
function Book(title,author,isbn){
    this.title = title;
    this.author = author;
    this.isbn = isbn;
}

//UI constructor
function UI(){
    //add prototype as a method
    UI.prototype.addBookToList = function(book){
        const list = document.getElementById('book-list');
        //create tr element
        const row = document.createElement('tr');
        //Inset cols
        row.innerHTML = `
        <td>${book.title}</td>
        <td>${book.author}</td>
        <td>${book.isbn}</td>
        <td><a href="#" class="delete">x</a></td>
        `

        list.appendChild(row);
    }
    UI.prototype.clearFeilds = function(){
        document.getElementById('title').value = '';
        document.getElementById('author').value = '';
        document.getElementById('isbn').value = '';
    }
}
//Event Listeners
document.getElementById('book-form').addEventListener('submit',function(e){
    //get form values
    const title = document.getElementById('title').value,
          author = document.getElementById('author').value,
          isbn  = document.getElementById('isbn').value;

        //instance of book 
          const book = new Book(title,author,isbn);

        //instance of UI
        const ui = new UI();
        // console.log(ui);

        //Add book to list method
        ui.addBookToList(book);

        //clear feilds method
        ui.clearFeilds();

    e.preventDefault();
})