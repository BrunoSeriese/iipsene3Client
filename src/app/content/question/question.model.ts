import {content} from "../content.interface";
import {Answer} from "../shared/answer/answer.model";

export class QuestionModel implements content {
  id: number;
  value: string;
  answers: Array<Answer>;

  getAnswer(): Answer[] {
    return [];
  }

  getId(): number {
    return 0;
  }

  getValue(): string {
    return "";
  }

};

