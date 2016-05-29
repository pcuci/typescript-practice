import { Category } from './enums';
interface Book {
  id: number;
  title: string;
  author: string;
  available: boolean;
  category: Category;
  pages?: number;
  markDamaged?: DamageLogger;
}

interface DamageLogger {
  (reason: string): void;
}

interface LibraryResource {
  catalogNumber: number;
}

interface Encyclopedia extends LibraryResource, Book {
  volume: number;
}

interface Person {
  name: string;
  email: string;
}

interface Author extends Person {
  numBooksPublished: number;
}

interface Librarian extends Person {
  department: string;
  assistCustomer: (custName: string) => void;
  doWork?: () => void;
}

interface Inventory<T> {
  getNewestItem: () => T;
  addItem: (newItem: T) => void;
  getAllItems: () => Array<T>;
}

interface Magazine {
  title: string;
  publisher: string;
}

interface CatalogItem {
  catalogNumber: number;
}

export { Book, DamageLogger as Logger, Author, Librarian, Inventory, Magazine, CatalogItem };