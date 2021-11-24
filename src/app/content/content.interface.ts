import {Answer} from "./shared/answer/answer.model";

export interface Content {
  getId(): number;
  getValue(): string;
  getAnswer(): Answer[];
}
