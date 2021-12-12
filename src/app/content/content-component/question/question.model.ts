import {Content} from "../../content.interface";
import {Answer} from "../../shared/answer/answer.model";

export class Question implements Content {

  constructor(private id: number,
              private value: string,
              private answers: Answer[]) { }

  public getId(): number {
    return this.id;
  }

  public getValue(): string {
    return this.value;
  }

  public getAnswer(): Answer[] {
    return this.answers;
  }

}

