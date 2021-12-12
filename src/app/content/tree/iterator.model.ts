export class Iterator<T> {
  private increment: number = -1;

  constructor(private data: T[]) { }

  public next(): T {
    this.increment++;
    return this.data[this.increment];
  }

  public hasNext(): boolean {
    return this.data[this.increment + 1] != null;
  }
}
