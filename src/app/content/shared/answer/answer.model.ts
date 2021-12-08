export class Answer{

  constructor(private id: number,
              private value: string,
              private nextContentId: number) {}

  public getId(): number {
    return this.id;
  }

  public getValue(): string {
    return this.value;
  }

  public getNextContentId(): number {
    return this.nextContentId;
  }

}
