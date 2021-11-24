import {Content} from "../content.interface";
import {Answer} from "../shared/answer/answer.model";

export class Question implements Content {
  constructor(private id: number,
              private value: string,
              private answers: Answer[]) {
  }

  getId(): number {
    return this.id;
  }

  getValue(): string {
    return this.value;
  }

  getAnswer(): Answer[] {
    return this.answers;
  }

}

