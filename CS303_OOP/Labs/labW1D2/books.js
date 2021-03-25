"use strict";
/* You need the module.exports when testing in node.  Comment it out when you send your file to the browser */
//module.exports = { findTitles, findAuthors, addBook }; //add all of your function names here that you need for the node mocha tests

let library = [
    { title: "The Road Ahead", author: "Bill Gates", libraryID: 1254 },
    { title: "Walter Isaacson", author: "Steve Jobs", libraryID: 4264 },
    { title: "Mockingjay: The Final Book of The Hunger Games", author: "Suzanne Collins", libraryID: 3245 }
];

/**
 * Event handler to display data in library 
 * @returns {string} return book datas from array
 */
function bookLibrary() {
    let title = document.getElementById("title").value;
    let author = document.getElementById("author").value;
    let libraryID = (document.getElementById("id").value);

    library.push({ title: title, author: author, libraryID: libraryID });

    let display = [];
    for (let element of library) {
        display.push(element.title + ", " + element.author + ", " + element.libraryID + "<br>");
    }

    document.getElementById("display").innerHTML = display;
}

/*
function showTitle(){
 let title=""
 let i=0;
let sortedByTitle=booksList.sort((a,b)=>{
 if(a.title>b.title) return 1
 else if(a.title<b.title) return -1
 else return 0;
 
})
 for(let i=0;i<sortedByTitle.length;i++){
 title+=i+1 +"."+(sortedByTitle[i].title+"\n" )
 }
 document.getElementById("displayArea").innerHTML=title;
}
*/




/**
 * Event handler to display library titles sorted alphabetically
 * @returns {string} return titles from array
 */
function showTitles() {

    /* put all titles into an array, then sort, then join with newline and insert in textarea innerHTML */

    const titles = findTitles();

    /*need to sort and then join the titles still (e.g., someArray.join("\n")  */
    titles.sort();
    const titleString = titles.join("\n");

    let textArea = document.getElementById("displayArea");
    textArea.innerHTML = titleString;
}
/**
 * 
 * @return {object} array holding all titles as elements
 */
function findTitles() {
    let titles = [];
    for (const book of library) {
        titles.push(book.title);
    }
    titles.sort();
    // titles = ["Mockingjay: The Final Book of The Hunger Games", "The Road Ahead", "Walter Isaacson"];  //FIX THIS!!
    // implement this and other functions
    return titles;
}

/**
 * Event handler to display library author sorted alphabetically
 * @returns {string} return authors from array
 */
function showAuthor() {

    let author = [];
    for (let book of library) {
        author.push(book.author + "\n");
    }
    author = author.sort();

    document.getElementById("displayArea").innerHTML = author;
}

/**
 * Event handler to display library libraryId sorted numericaly
 * @returns {string} return libraryId from array
 */
function libraryId() {

    let libraryID = [];
    for (let book of library) {
        libraryID.push(book.libraryID + "\n");
    }
    libraryID = libraryID.sort((first, last) => first - last);

    document.getElementById("displayArea").innerHTML = libraryID;
}