import {Content} from "../content.interface";
import {Answer} from "../shared/answer/answer.model";

export class Result implements Content {
  constructor(private id: number,
              private value: string,
              private answer: Answer) {
  }

  getId(): number {
    return this.id;
  }

  getValue(): string {
    return this.value;
  }

  getAnswer(): Answer[] {
    return [this.answer];
  }

  getAnswerValue(): string {
    return this.answer.getValue();
  }



}

