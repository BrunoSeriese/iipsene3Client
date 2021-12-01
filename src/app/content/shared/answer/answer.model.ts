export class Answer{

  constructor(
    private id: number,
    private value: string,
    private nextContentId: number) {}

  getId(): number {
    return this.id;
  }

  getValue(): string {
    return this.value;
  }

  getNextContentId(): number {
    return this.nextContentId;
  }

}
