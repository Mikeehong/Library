let myLibrary = []

class Book {
    constructor() {
        this.title = document.getElementById('title').value || undefined
        this.author = document.getElementById('author').value || undefined
        this.page = document.getElementById('page').value || undefined
        this.status = document.getElementById('status').checked
    }
    
}

const addBtn = document.querySelector('.addBtn')
addBtn.addEventListener('click', showForm)

const submitBtn = document.querySelector('.submitBtn')
submitBtn.addEventListener('click', addBookToLibrary)

const statusBtn = document.querySelector('.statusBtn')
statusBtn.addEventListener('click', changeStatus)

const removeBtn = document.querySelector('.removeBtn')
const exampleBook = document.querySelector('.example')
removeBtn.addEventListener('click', () => removeBook(exampleBook))
const form = document.querySelector('.form')

const overlay = document.getElementById('overlay')
overlay.addEventListener('click', () => {
    closeForm()
})


function removeBook(chosenBook) {
    const books = document.querySelector('.books')
    books.removeChild(chosenBook)
}

// function updateLibrary(newbook) {
//     myLibrary = myLibrary.filter(book => {
//         console.log(book.title)
//         console.log(chosenBook.title)
//         return book.title !== chosenBook.title
//     }) 
//     console.log(myLibrary)
// }

function changeStatus() {
    if (this.innerText === "READ") {
        this.classList.add('notRead')
        this.innerText = "NOT READ"
        return
    } else {
        this.classList.remove('notRead')
        this.innerText = "READ"
        return 
    }
}

function addBookToLibrary(e) {
    e.preventDefault()
    const book = new Book()
    myLibrary.push(book)
    createBooks(book)
    form.reset()
    closeForm()
}

function showForm() {
    form.classList.add('active')
    overlay.classList.add('active')
}

function closeForm() {
    form.classList.remove('active')
    overlay.classList.remove('active')
}


function createBooks(book) {
    const bookGroup = document.querySelector('.books')
    const bookElement = document.createElement('div') 
    const info = document.createElement('div')
    const bookTitle = document.createElement('p') 
    const bookAuthor = document.createElement('p') 
    const bookPages = document.createElement('p') 
    const removeBtn = document.createElement('button')
    const statusBtn = document.createElement('button')
    
    info.classList.add('info')
    bookElement.classList.add('book')
    removeBtn.classList.add('removeBtn')
    statusBtn.classList.add('statusBtn')

    bookTitle.innerText = book.title
    bookAuthor.innerText = book.author
    bookPages.innerText = book.page
    removeBtn.innerText = "REMOVE"
    statusBtn.innerText = book.status ? "READ" : "NOT READ"

    if (statusBtn.innerText === "NOT READ") {
        statusBtn.classList.add('notRead')
    }

    info.append(bookTitle, bookAuthor, bookPages)
    bookElement.append(info, removeBtn, statusBtn)
    bookGroup.append(bookElement)

    statusBtn.addEventListener('click', changeStatus)
    removeBtn.addEventListener('click', () => removeBook(bookElement))
}
