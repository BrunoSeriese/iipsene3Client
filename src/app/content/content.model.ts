import {Answer} from "./shared/answer/answer.model";

export class ContentModel{
constructor(private  id: number,
            private value: string,
            private type: string,
            private answers: Answer[]) {}

  public getId(): number {
    return this.id;
  }

  public getValue(): string {
    return this.value;
  }

  public getType(): string {
    return this.type;
  }

  public  getAnswers():Answer[] {
    return this.answers;
  }

}
