export class Stock {
  favorite: boolean = false;
  classes: string;
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

  isSmallChange(): boolean {
    return (Math.abs((this.price / this.previousPrice) - 1) <= 0.01);
  }

  isLargeChange(): boolean {
    return (Math.abs((this.price / this.previousPrice) - 1) > 0.01);
  }

  getClasses(): string {
    this.classes = " {" + "\"positive\":"
      + this.isPositiveChange()
      + ",\"negative\":" +
      !this.isPositiveChange()
      + ",\"large-change\":"
      + this.isLargeChange()
      + ",\"small-change\":"
      + this.isSmallChange()
      + "}";

    return this.classes;
  }
}

