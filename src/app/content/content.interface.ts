import {Answer} from "./shared/answer/answer.model";

export interface content {
  id: number;
  value: string;

  getId(): number;
  getValue(): string;
  getAnswer(): Answer[];
}
