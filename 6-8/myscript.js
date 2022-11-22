const books = [
    {title: 'Total loss', pages: 600, genre: 'fantasy', rating: 5},
    {title: 'Total enlightenment', pages: 250, genre: 'romance', rating: 2},
    {title: 'Big loss', pages: 400, genre: 'fantasy', rating: 7},
    {title: '10th Joy', pages: 32, genre: 'action', rating: 8},
    {title: 'Quickfix', pages: 15, genre: 'fantasy', rating: 1},
    {title: 'World Ender', pages: 199, genre: 'fantasy', rating: 3},
    {title: 'Paranormal', pages: 200, genre: 'thriller', rating: 9},
    {title: '300', pages: 600, genre: 'criminology', rating: 10},
    {title: 'Renewer', pages: 472, genre: 'biology', rating: 2}
];
//PRZYKŁADY:
//tworzymy funkcje
const filterTitleStartsWithTotal = (list) => list.filter((book) => book.title.startsWith('Total'));
const filterGenreIsFantasy = (list) => list.filter((book) => book.genre === 'fantasy');
const mapToPages = (list) => list.map(({pages}) => pages);
const sumPages = (book) => book.reduce((currSum, newPage) => currSum + newPage)
//tworzymy kompozycje
const badCompose = (fn1, fn2, fn3) => (x) => fn3(fn2(fn1(x)));
const compose = (...fns) => (x) => fns.reduceRight((acc, fn) => fn(acc), x);
//tworzymy funkcję używającą kompozycji
const titleStartsWithTotalPages = compose(sumPages, mapToPages, filterTitleStartsWithTotal);
const genreIsFantasyPages = compose(sumPages, mapToPages, filterGenreIsFantasy);
//wypisujemy dla książek
console.log(titleStartsWithTotalPages(books));
console.log(genreIsFantasyPages(books));


//zad6

//var regex = /[\S]/g;
//const sumTitles = (book) => book.reduce((x, book.title.match(regex).length) => x + countTitle);
const replaceTitle = (a) => a.map((x) => x.title.replace(/\s/g, ''));
const countTitle = (a) => a.reduce((x, y) => x + y).length;
//const filterPagesEven = (a) => a.filter((x) => x.pages % 2 == 0);
const filterGenreY = (a) => a.filter((x) => x.genre.endsWith("y") && x.pages % 2 === 0);
const zadanie6 = compose(countTitle, replaceTitle, filterGenreY);
//const finalCount = (a) => a.map((x) => )
console.log(zadanie6(books));


const filterPagesUneven = (a) => a.filter((x) => x.pages % 2 == 1);
const filterTitleNumber = (a) => a.filter((x) => /\d/.test(x.title));
const filterRating = (a) => a.filter((x) => x.rating > 5);
const countBooks = (a) => a.length;
const zadanie7 = compose(countBooks, filterTitleNumber, filterRating, filterPagesUneven);
console.log(zadanie7(books));


//const longestTitle = (a) => a.reduce((x, y) => x.length > y.length ? x = y : x = x);
const longestTitle2 = (a) => a.sort((x, y) => y - x)[2].title;

//const zad6 = compose(sumTitles);
console.log(longestTitle2(books))



