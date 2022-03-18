import {Answer} from "./shared/answer/answer.model";

export class Content {
constructor(private _id: number,
            private _value: string,
            private _type: string,
            private _answers: Answer[]) {}


  get id(): number {
    return this._id;
  }

  set id(value: number) {
    this._id = value;
  }

  get value(): string {
    return this._value;
  }

  set value(value: string) {
    this._value = value;
  }

  get type(): string {
    return this._type;
  }

  set type(value: string) {
    this._type = value;
  }

  get answers(): Answer[] {
    return this._answers;
  }

  set answers(value: Answer[]) {
    this._answers = value;
  }
}
