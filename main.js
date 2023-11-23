const myLibrary = [];

function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

function addBookToLibrary() {
    // do stuff here
}

const dialogElem = document.getElementById("dialog");
const newBookBtn = document.querySelector(".newBook");
const closeBtn = document.querySelector(".close");

newBookBtn.addEventListener("click", () => {
    dialogElem.showModal();
});

closeBtn.addEventListener("click", () => {
    dialogElem.close();
});
