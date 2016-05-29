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
  constructor(title: string, publisher?: string) {
    // perform initialization here
  }
}

export { UniversityLibrarian, ReferenceItem };