// switching from books collection to new book form page when clicking 
// in the button add Book

function newBookForm() {
    return window.location.href = "./addBook.html";
}

fetchBooks();
var data = [];

// getting data array of objects from the api using async awit fetch

async function fetchBooks() {
    const login_url = " http://localhost:5000/citylibrary/api/books/list";
    const result = await fetch(login_url)
    data = await result.json()
    console.log(data);
    buildTable(data.books);
}

// displaying the data in a table in books collection page

function buildTable(data) {
    let table = document.getElementById("myTable");
    table.innerHTML = '';
    for (i = 0; i < data.length; i++) {
        let row = ` 
                        <td>${i + 1}</td>
                        <td>${data[i].isbn}</td>
                        <td>${data[i].title}</td>
                        <td>${data[i].overdueFee}</td>
                        <td>${data[i].publisher}</td>
                        <td>${data[i].datePublished}</td>`
        table.innerHTML += row;

    }
}



// to clear the input values of the edit book form

function clearField() {
    document.querySelector("#isbn").value = '';
    document.querySelector("#bookTitle").value = '';
    document.querySelector("#overdueFee").value = '';
    document.querySelector("#publisher").value = '';
    document.querySelector("#dateOfPublished").value = '';
}

















