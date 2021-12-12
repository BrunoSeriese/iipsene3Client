export class Answer{

  constructor(private id: number,
              private value: string) {}

  public getId(): number {
    return this.id;
  }

  public getValue(): string {
    return this.value;
  }

}
