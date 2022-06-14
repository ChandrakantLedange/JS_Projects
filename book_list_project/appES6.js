class Book{
    constructor(title,author,isbn){
        this.title = title;
        this.author = author;
        this.isbn = isbn;
    }
}


class UI{
    //Add book method
    addBookToList(book){
        const list = document.getElementById('book-list');
        //create tr element
        const row = document.createElement('tr');
        //Inset cols
        row.innerHTML = `
        <td>${book.title}</td>
        <td>${book.author}</td>
        <td>${book.isbn}</td>
        <td><a href="#" class="delete danger">x</a></td>
        `;

        list.appendChild(row);
    }
    //show alert method
    showAlert(message, className){
         //create div
         const div = document.createElement('div');
         //Add classes
         div.className = `alert ${className}`;
         //Add text
         div.appendChild(document.createTextNode(message));
         //Get Parent
         const container = document.querySelector('.container');
         //Get form
         const form = document.querySelector('#book-form');
 
         //insert alert
         container.insertBefore(div,form)
 
         //timeout after three second
         setTimeout(function(){
             document.querySelector('.alert').remove();
         },3000);
    }
    //delete book method
    deleteBook(target){
        if(target.className === 'delete'){
            target.parentElement.parentElement.remove();
        }
    }
    //clear feild method
    clearFeilds(){
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
        console.log(ui);

        //validate
        if(title === '' || author === '' || isbn === ''){
            //Error alert
            ui.showAlert('Please fill in all fields','error');
        }else{
            
            //Add book to list method
            ui.addBookToList(book);

            //show success alert
            ui.showAlert('Book Added!','success');
            
            //clear feilds method
            ui.clearFeilds();
        }

    e.preventDefault();
})

//Event listner for delete
document.getElementById('book-list').addEventListener('click',function(e){
    
    //instance of UI
    const ui = new UI();

    //delete book
    ui.deleteBook(e.target);

    //show alert once delete
    ui.showAlert('Book Removed!','success');

    e.preventDefault();
})