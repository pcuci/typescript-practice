class HelloWorld {
  constructor(public message: string) {
  }
}

var hello = new HelloWorld("Hello TypeScript 1!!!");
console.log(hello.message, 'again');