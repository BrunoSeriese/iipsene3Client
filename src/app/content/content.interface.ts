import {Answer} from "./shared/answer/answer.model";

export interface Content {
  get id(): number;
  get value(): string;
  set value(value: string);
  get answers(): Answer[];

}
