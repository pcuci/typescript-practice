import {Book, DamageLogger, Author, Librarian} from './interfaces';

class UniversityLibrarian implements Librarian {
  name: string;
  email: string;
  department: string;
  assistCustomer(custName: string) {
    console.log(this.name + ' is assisting ' + custName);
  }
}

class ReferenceItem {
  numberOfPages: number;
  constructor(title: string, publisher?: string) {
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
}

export { UniversityLibrarian, ReferenceItem };