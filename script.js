const books = Array.from(document.querySelectorAll('[data-pages]'));
const showPages = document.querySelector('.show-pages');
const showBooks = document.querySelector('.show-book');


const programingBooksPages = books.filter(books => books.textContent.includes('PROGRAMING')) // choose programing books
    .map(page => page.dataset.pages) //take a page
    .map(page => parseInt(page))// change to integer
    .reduce((previousValue, currentValue) => previousValue + currentValue); 

const totalBooks = books.filter(books => books.textContent.includes('PROGRAMING')).length;

showPages.innerHTML = `${programingBooksPages} Pages`
showBooks.innerHTML = `${totalBooks} Books` 