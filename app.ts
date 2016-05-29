function getAllBooks() {
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

enum Category { Biography, Poetry, Fiction, History, Children };

const allBooks = getAllBooks();
logFirstAvailable();

const poetryBooks = getBookTitlesByCategory(Category.Poetry);
logBookTitles(poetryBooks);

const fictionBooks = getBookTitlesByCategory(Category.Fiction);
fictionBooks.forEach((val, idx, arr) => console.log(++idx + ' - ' + val));

function getBookByID(id: number) {
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
