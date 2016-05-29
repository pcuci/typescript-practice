export interface Periodical {
  issueNumber: number;
}
export class Magazine implements Periodical {
  issueNumber: number;
}
export function getMagazineByIssueNumber(issue: number): Magazine {
  // retrieve and return a magazine
  return new Magazine();
}

// or use an export statement, remove export keyword above
// export { Periodical, Magazine, getMagazineByIssueNumber as getMag }