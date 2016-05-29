import { Category } from './enums';
import { Book, Logger, Author, Librarian, Magazine } from './interfaces';
import { UniversityLibrarian, ReferenceItem, ReferencebleItem, Library } from './classes';
import RefBook from './encyclopedia';
import { calculateLateFee, maxBooksAllowed, purge } from './lib/utility_functions';
import Shelf from './shelf';

let reference = new RefBook('Fact Book', 2016, 1);

function getAllBooks(): Book[] {
  let books = [
    {
      id: 1,
      title: 'Ulysses',
      author: 'James Joyce',
      available: true,
      category: Category.Fiction
    },
    {
      id: 2,
      title: 'A Farewell to Arms',
      author: 'Ernest Hemingway',
      available: false,
      category: Category.Fiction
    },
    {
      id: 3,
      title: 'I Know Why the Caged Bird Sings',
      author: 'Maya Angelou',
      available: true,
      category: Category.Poetry
    },
    {
      id: 4,
      title: 'Moby Dick',
      author: 'Herman Melville',
      available: true,
      category: Category.Fiction
    }
  ];

  return books;
}

function logFirstAvailable(books = getAllBooks()): void {
  let numberOfBooks: number = books.length;
  let firstAvailable: string = '';
  for (let currentBook of books) {
    if (currentBook.available) {
      firstAvailable = currentBook.title;
      break;
    }
  }
  console.log('Total Books: ' + numberOfBooks);
  console.log('First Available: ' + firstAvailable);
}

function getBookTitlesByCategory(categoryFilter: Category = Category.Fiction): Array<string> {
  console.log('Getting books in category: ' + Category[categoryFilter]);
  const allBooks = getAllBooks();
  const filteredTitles: string[] = [];
  for (let currentBook of allBooks) {
    if (currentBook.category === categoryFilter) {
      filteredTitles.push(currentBook.title);
    }
  }
  return filteredTitles;
}

function logBookTitles(titles: string[]): void {
  for (let title of titles) {
    console.log(title);
  }
}

const allBooks = getAllBooks();
logFirstAvailable();

const poetryBooks = getBookTitlesByCategory(Category.Poetry);
logBookTitles(poetryBooks);

const fictionBooks = getBookTitlesByCategory(Category.Fiction);
fictionBooks.forEach((val, idx, arr) => console.log(++idx + ' - ' + val));

function getBookByID(id: number): Book {
  const allBooks = getAllBooks();
  return allBooks.filter(book => book.id === id)[0];
}

function createCustomerID(name: string, id: number): string {
  return name + id;
}

let x: number;
x = 5;

let idGenerator: (chars: string, nums: number) => string; // function type definition, don't confuse => with the fat arrow
idGenerator = createCustomerID;
idGenerator = (name: string, id: number) => { return id + name }; // inline function

function createCustomer(name: string, age?: number, city?: string): void {
  console.log('Creating customer ' + name);

  if (age) {
    console.log('Age: ' + age);
  }

  if (city) {
    console.log('City: ' + city);
  }
}

createCustomer('Michelle');
createCustomer('Leight', 6);
createCustomer('Marie', 12, 'Atlanta');

function checkoutBooks(customer: string, ...bookIDs: number[]): string[] {
  console.log('Checking out books for ' + customer);
  let booksCheckedOut: string[] = [];
  for(let id of bookIDs) {
    let book = getBookByID(id);
    if (book.available) {
      booksCheckedOut.push(book.title);
    }
  }
  return booksCheckedOut;
}

let myBooks: string[] = checkoutBooks('Thorne', 1, 3, 4);
myBooks.forEach(title => console.log(title));

function getTitles(author: string): string[];
function getTitles(available: boolean): string[];
function getTitles(bookProperty: any): string[] {
  const allBooks = getAllBooks();
  const foundTitles = [];
  if (typeof bookProperty == 'string') {
    // get books by author, add to foundTitles
    for (let book of allBooks) {
      if (book.author == bookProperty) {
        foundTitles.push(book.title);
      }
    }
  } else if (typeof bookProperty == 'boolean') {
    // get books by availability, add to foundTitles
    for (let book of allBooks) {
      if (book.available === bookProperty) {
        foundTitles.push(book.title);
      }
    }
  }
  return foundTitles;
}

let hermansBooks = getTitles('Herman Melville');
hermansBooks.forEach(title => console.log(title));
let checkedoutBooks = getTitles(false);
checkedoutBooks.forEach(title => console.log(title));

function printBook(book: Book): void {
  console.log(book.title + ' by ' + book.author);
}

let myBook: Book = {
  id: 5,
  title: 'Pride and Prejudice',
  author: 'Jane Austen',
  available: true,
  category: Category.Fiction,
  pages: 250,
  markDamaged: (reason: string) => console.log('Damaged: ' + reason)
}

myBook.markDamaged('missing back cover');
printBook(myBook);

let logDamage: Logger;
logDamage = (damage: string) => console.log('Damage reported: ' + damage);

logDamage('torn pages');

// let favoriteAuthor: Author = {};
// let favoriteLibrarian: Librarian = {};

class ElementarySchoolLibrarian implements Librarian {
  name = 'Jane Avery';
  email = 'jane@school.edu';
  department: 'Earl Haig Elementary School';
  assistCustomer() {
    console.log('Elementary librarian ' + this.name + ' is assisting customer');
  }
  doWork() {
    console.log('Reading to and teaching children...');
  }
}

let kidsLibrarian: Librarian = new ElementarySchoolLibrarian();
kidsLibrarian.doWork();

let favoriteLibrarian: Librarian = new UniversityLibrarian();
favoriteLibrarian.name = 'Sharon';
favoriteLibrarian.assistCustomer('Lynda');

let encyclopedia = new ReferencebleItem('WorldPedia', 'WorldPub');

let lib = new Library('New York Public Library');
let name = lib.name; // available on instances of the class
let desc = Library.description; // reference the class to access static vars

// all class members are public, except parameter properties (need public)

// let ref: ReferenceItem = new ReferenceItem('New Facts and Figures', 2016);
// ref.printItem();
// ref.publisher = 'Random Data Publishing';
// console.log(ref.publisher);

let refBook: ReferenceItem = new RefBook('WorldPedia', 1900, 15);
refBook.printItem();
refBook.printCitation();

// Class expressions
let Newspaper = class extends ReferenceItem {
  printCitation(): void {
    console.log(`Newspaper: ${this.title}`);
  }
}
let myPaper = new Newspaper('The Gazette', 2010);
myPaper.printCitation();

// Inline class expressions
class Novel extends class { title: string } {
  mainCharacter: string;
}

let favoriteNovel = new Novel();
favoriteNovel.title = 'The Idiot';
favoriteNovel.mainCharacter = 'Irina';
console.log(`Main character in ${favoriteNovel.title} is ${favoriteNovel.mainCharacter}`);

let inventory: Array<Book> = [
  {
    id: 10,
    title: 'The C Programming Language',
    author: 'K & R',
    available: true,
    category: Category.Software
  }, {
    id: 11,
    title: 'Code Complete',
    author: 'Steve McConnel',
    available: true,
    category: Category.Software
  }, {
    id: 12,
    title: '8-Bit Graphics with Cobol',
    author: 'A. B.',
    available: true,
    category: Category.Software
  }, {
    id: 13,
    title: 'Cool autoexec.bat Scripts!',
    author: 'C. D.',
    available: true,
    category: Category.Software
  }
];

// let purgedBooks: Array<Book> = purge<Book>(inventory);
// purgedBooks.forEach(book => console.log(book.title));
//
// let purgedNums: Array<number> = purge<number>([1, 2, 3, 4]);
// purgedNums.forEach(num => console.log(num));

let bookShelf: Shelf<Book> = new Shelf<Book>();
inventory.forEach(book => bookShelf.add(book));
let firstBook: Book = bookShelf.getFirst();

let magazines: Array<Magazine> = [
  { title: 'Programming Language Monthly', publisher: 'Code Mags' },
  { title: 'Literary Fiction Quarterly', publisher: 'College Press'},
  { title: 'Five Points', publisher: 'GSU' }
];

let magazineShelf: Shelf<Magazine> = new Shelf<Magazine>();
magazines.forEach(magazine => magazineShelf.add(magazine));
let firstMagazine: Magazine = magazineShelf.getFirst();

// Error:(288, 44) TS2344: Type 'number' does not satisfy the constraint 'ShelfItem'.
// let numberShelf: Shelf<number> = new Shelf<number>();
// [5, 16, 23].forEach(num => numberShelf. add(num));

magazineShelf.printTitles();
let softwareBook = bookShelf.find('Code Complete');
console.log(`${softwareBook.title} (${softwareBook.author})`);
