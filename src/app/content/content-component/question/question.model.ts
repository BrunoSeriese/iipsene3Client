import {Content} from "../../content.interface";
import {Answer} from "../../shared/answer/answer.model";

export class Question implements Content {

  constructor(private _id: number,
              private _value: string,
              private _answers: Answer[]) { }

  get id(): number {
    return this._id;
  }

  get value(): string {
    return this._value;
  }

  get answers(): Answer[] {
    return this._answers;
  }
}

