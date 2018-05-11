export class Stock {
  favorite: boolean = false;

// Using TypeScript's syntactic suger to make public properties in the constructor 'properties'
  /* In short, we have created a class with five properties, four coming through the constructor and one auto-initialized.
   */
  constructor(public name: string,
              public code: string,
              public price: number,
              public previousPrice: number) {
  }

  isPositiveChange(): boolean {
    return this.price > this.previousPrice;
  }
}
