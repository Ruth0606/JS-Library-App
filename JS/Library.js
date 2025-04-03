var numOfBook = 0;
var booksLibrary = [];
var selectedBooks = []
let books;
let readBook;
let nmOfLownBk = document.createElement("p");
let whichBook = document.createElement("h3");
loadpage = function () {
    var objString = localStorage.getItem("BooksList");
    var myObjJson = JSON.parse(objString);
    selectedBooks = myObjJson;
    presentData();
}
loadBooks = function () {
    let books_path = "JSON/books.json";
    let rbooks_path = "JSON/readbooks.json";
    let readBookJson = fetch(rbooks_path)
        .then(rbook => rbook.json())
        .then(arr =>
            readBook = arr.map(br => new ReadBook(br.Title, br.Code, br.Year, br.Pages, br.Description, br.Author, br.Level, br.ImageSrc, null)
            ))
        .catch((eror) => console.log(eror))

    let bookJson = fetch(books_path)
        .then(book => book.json())
        .then(arr => {
            books = arr.map(b => new Book(b.Code, b.Title, b.Pages, b.Year, null))
        })
        .catch((eror) => console.log(eror))



    Promise.all([readBookJson, bookJson])
        .then(() => {
            booksLibrary = books.concat(readBook)
            console.log(booksLibrary)
        })
        .then(() => createBooks(booksLibrary))
        .catch((eror) => console.log(eror))
}

createBooks = function (booksLibrary) {
    //document.getElementsByClassName("card").forEach(i=>document.getElementsByClassName("gridcontainer")[0].removeChild(document.getElementsByClassName("card")[i]))
    //document.getElementsByClassName("card").forEach(i=>document.getElementsByClassName("gridcontainer")[0].removeChild(i));
    // document.getElementsByClassName("gridcontainer")[0].forEach(i=>)
    document.getElementsByClassName("gridcontainer")[0].innerHTML = null;
    booksLibrary.forEach(element => {
        createBookView(element)
    });

}
findBook = function () {
    let str = document.getElementsByClassName("myInput")[0].value;
    let arr = booksLibrary.filter(e => e.searchInBook(str));
    createBooks(arr);
    // window.alert("אין תוצאות לחיפוש");
}

function presentData() {
    var count;
    if (selectedBooks == null) {
        count = 0;
    }
    else
        count = selectedBooks.length;
    nmOfLownBk.innerHTML = `${count}  :מספר הספרים שברשותך`;
    let s = "";
    if(selectedBooks)
    {
        selectedBooks.forEach(element => { s += element.Title + "   ," });

    }
    whichBook.innerHTML = s;
}