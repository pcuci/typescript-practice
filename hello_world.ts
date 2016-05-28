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

let arr = allBooks.filter(function(book) {
  return book.author == 'Herman Melville';
});

let arrow = allBooks.filter(book => book.author === 'Herman Melville');

myBooks.forEach(() => console.log('Done reading!'));
myBooks.forEach(title => console.log(title));
myBooks.forEach((title, idx, arr) => console.log(idx + ' - ' + title));
myBooks.forEach((title, idx, arr) => {
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

