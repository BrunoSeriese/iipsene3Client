export class UserResult {
  constructor(private _id: number,
              private _dateAdded: string,
              private _result: string) {
  }

  get id(): number {
    return this._id;
  }

  set id(value: number) {
    this._id = value;
  }

  get dateAdded(): string {
    return this._dateAdded;
  }

  set dateAdded(value: string) {
    this._dateAdded = value;
  }

  get result(): string {
    return this._result;
  }

  set result(value: string) {
    this._result = value;
  }
}
