/// <reference path='membership.ts' />
/// <reference path='utility_functions.ts'/>

import util = Utility.Fees;

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

class HelloWorld {
  constructor(public message: string) {
  }
}

var hello = new HelloWorld("Hello TypeScript!");
console.log(hello.message, 'again');

function scopeTest() {
  if (true) {
    var foo = 'use anywhere';
    let bar = 'use in this block';
    // do some more stuff
  }
  console.log(foo); // works!
  // console.log(bar); // doesn't work!

  let myString = 'this is a string';
  // myString = 42; // error!

  function returnNumber(): number {
    return 42; // infers return type
  }
  let anotherString: string = 'this is also a string';
  //anotherString = returnNumber(); // error!
}

enum Category { Biography, Poetry, Fiction } // 0, 1, 2, or Biography = 4 to start from there
let favoriteCategory: Category = Category.Biography;
console.log(favoriteCategory); // 0
let categoryString: string = Category[favoriteCategory]; // Biography
console.log('categoryString:', categoryString);

let strArray1: string[] = ['here', 'are', 'strings'];
let strArray2: Array<string> = ['more', 'strings', 'here'];
let anyArray: any[] = ['banana', 42, true];
let myTuple: [number, string] = [25, 'truck'];
let firstElement = myTuple[0]; // 25
let secondElement = myTuple[1]; // 'truck'
myTuple[2] = 100;
myTuple[2] = 'this works!';

function createCustomerID(name: string, id: number): string {
  return name + id;
}

let arr = books.filter(function(book) {
  return book.author == 'Herman Melville';
});

let arrow = books.filter(book => book.author === 'Herman Melville');

books.forEach(() => console.log('Done reading!'));
books.forEach(title => console.log(title));
books.forEach((title, idx, arr) => console.log(idx + ' - ' + title));
books.forEach((title, idx, arr) => {
  console.log(idx + ' - ' + title);
  // do more stuff
});

function dateBook() {
  let self = this;
  self.publisheDate = 2016;
  setInterval(function() {
    console.log(self.publishDate);
  }, 1000);
}

// vs. arrow function this behaviour

function dateFatBook() {
  this.publisheDate = 2016;
  setInterval(() => {
    console.log(this.publishDate);
  }, 1000);
}

function publishDate(year: number): string {
  return 'date published: ' + year;
}

let publishFunc: (someYear: number) => string;

publishFunc = publishDate;
let message: string = publishFunc(2016);

// optional parameters
function createCustomer(name: string, age?: number) { }

function getBookByTitle(title: string = 'The C Programming Language') { }

function getMostPopularBook() {
  return 'Antifragile';
}

function getBookByComputedTitle(title: string = getMostPopularBook()) { } // use an expression to default the value of a parameter

function getBooksReadForCust(name: string, ...bookIDs: number[]) { }

let readBooks = getBooksReadForCust('Leight', 2, 5);
let moreBooksRead = getBooksReadForCust('Daniel', 2, 5, 12, 42);

interface Duck {
  walk: () => void;
  swim: () => void;
  quack: () => void;
}

let probablyADuck = {
  walk: () => console.log('walking like a duck'),
  swim: () => console.log('swimming like a duck'),
  quack: () => console.log('quacking like a duck')
}

function flyOverWater(bird: Duck) { }
flyOverWater(probablyADuck); // works!

interface StringGenerator {
  (chars: string, nums: number): string;
}

// let idGenerator: (chars: string, nums: number) => string;
// or better, easier to read
let idGenerator: StringGenerator;
idGenerator = createCustomerID;

let memberName: string = 'Elaine';
let memberNumber: number = 798;
Membership.addMember(memberName);
Membership.Card.issueCard(memberNumber);

let fee = util.calculateLateFee(10);
console.log(`Fee: ${fee}`);

