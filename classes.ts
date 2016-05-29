import {Book, DamageLogger, Author, Librarian} from './interfaces';

class UniversityLibrarian implements Librarian {
  name: string;
  email: string;
  department: string;
  assistCustomer(custName: string) {
    console.log(this.name + ' is assisting ' + custName);
  }
}

class ReferencebleItem {
  numberOfPages: number;
  constructor(title?: string, publisher?: string) {
    // perform initialization here
  }
  get editor(): string {
    // custom getter logic goes here, should return a value
    return 'editing';
  }
  set editor(newEditor: string) {
    // custom setter logic goes here
    let edit = newEditor;
    console.log('edit', edit);
  }
  printChapterTitle(chapterNum: number): void {
    // print title here
  }
}

abstract class ReferenceItem {
  // title: string;
  // private year: number;
  // constructor(newTitle: string, newYear: number) {
  //   this.title = newTitle;
  //   this.year = newYear;
  //   console.log('Creating a new ReferenceItem...');
  // }

  private _publisher: string;
  static department: string = 'Research';

  constructor(public title: string, protected year: number) {
    console.log('Creating a new ReferenceItem...');
  }

  printItem(): void {
    console.log(`${this.title} was published in ${this.year}.`);
    console.log(`Department: ${ReferenceItem.department}`);
  }

  get publisher(): string {
    return this._publisher.toUpperCase();
  }

  set publisher(newPublisher: string) {
    this._publisher = newPublisher;
  }

  printChapterTitle(chapterNum:number):void {
    // print title here
  }

  abstract printCitation(): void;
}

class BookAuthor {
  name: string;
  constructor(authorName: string) {
    name = authorName;
  }
}

class PublicAuthor {
  constructor(public name: string) { } // shortcut for declaring and setting class properties
}

class Library {
  constructor(public name: string) { }
  static description: string = 'A source of knowledge.';
}

class Journal extends ReferencebleItem {
  constructor() {
    super();
  }
  contributors: string[];
}

class Encyclopedia extends ReferenceItem {
  constructor(newTitle: string, newYear: number, public edition: number) {
    super(newTitle, newYear);
  }

  printItem(): void {
    super.printItem();
    console.log(`Edition: ${this.edition} (${this.year})`);
  }

  printCitation(): void {
    console.log(`${this.title} - ${this.year}`);
  }
}

export { UniversityLibrarian, ReferenceItem, ReferencebleItem, Library, Encyclopedia };