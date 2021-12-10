import {Content} from "../content.interface";
import {Answer} from "../shared/answer/answer.model";

export class Result implements Content {
  constructor(private id: number,
              private value: string,
              private answer: Answer) { }

  public getId(): number {
    return this.id;
  }

  public getValue(): string {
    return this.value;
  }

  public getAnswer(): Answer[] {
    return [this.answer];
  }
}

