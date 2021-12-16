import {Injectable} from '@angular/core';
import {Node} from "./node.model";
import {Content} from "../content.interface";
import {Iterator} from "./iterator.model";
import {Result} from "../content-component/result/result.model";
import {Question} from "../content-component/question/question.model";
import {Answer} from "../shared/answer/answer.model";
import {Explanation} from "../content-component/explanation/explanation.model";
import {Video} from "../content-component/video/video.model";

@Injectable({
  providedIn: 'root'
})
export class ContentTreeService {
  private contents: Content[];
  private root: Node;

  constructor() {
    this.contents = [
      new Question(1, "Is koffie lekker?", [
        new Answer(1, "Ja"),
        new Answer(2, "Beetje wel"),
        new Answer(3, "Beetje niet"),
        new Answer(4, "Nee"),
      ]),
      new Explanation(6, "Je gaat een sterke kop koffie krijgen", new Answer(9, "Die heb je verdient!")),
      new Result(2, "Je krijgt koffie", new Answer(5, "Je krijgt een sterke kop koffie")),
      new Video(7, "Een mooie video over koffie", new Answer(10, "https://www.youtube.com/watch?v=WrZZ_L7rf-A")),
      new Result(3, "Je krijgt koffie", new Answer(6, "Je krijgt een normale kop koffie")),
      new Result(4, "Je krijgt koffie", new Answer(7, "Je krijgt een slappe kop koffie")),
      new Result(5, "Je krijgt geen koffie", new Answer(8, "Je krijgt geen kop koffie")),
    ];

    const iterator: Iterator<Content> = new Iterator<Content>(this.contents);
    this.root = this.construct(iterator);
  }

  public getRoot(): Node {
    return this.root;
  }

  private construct(iterator: Iterator<Content>): Node {
    if (!iterator.hasNext()) {
      return null;
    }

    const content: Content = iterator.next();
    const node: Node = new Node(content);

    if (!(content instanceof Result)) {
      for (let answer of node.content.getAnswer()) {
        const child: Node = this.construct(iterator);
        node.addChild(child);
      }
    }

    return node;
  }

  public display(node: Node): void {
    if(node == null) {
      return;
    }

    let value: string = node.content.getValue() + " => ";

    for(let answer of node.content.getAnswer()) {
      value += answer.getValue() + ", ";
    }

    console.log(value);

    for(let child of node.getChildren()) {
      this.display(child);
    }
  }

  public height(node: Node): number {
    let totalHeight: number = 0;

    if(node == null) {
      return totalHeight;
    }

    for(let child of node.getChildren()) {
      const currentHeight: number = this.height(child);
      if(currentHeight > totalHeight) {
        totalHeight = currentHeight;
      }
    }
    return ++totalHeight;
  }

  public getNodeByAnswerIndex(node: Node, index: number): Node {
    return node != null ? node.getChildren()[index] : null;
  }
}
