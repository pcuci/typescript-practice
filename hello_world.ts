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
  console.log(bar); // doesn't work!

  let myString = 'this is a string';
  myString = 42;

  function returnNumber(): number {
    return 42; // infers return type
  }
  let anotherString: string = 'this is also a string';
  anotherString = returnNumber(); // error!
}

