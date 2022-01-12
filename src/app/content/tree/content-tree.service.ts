import {Injectable} from '@angular/core';
import {Node} from "./node.model";
import {Content} from "../content.interface";
import {Iterator} from "./iterator.model";
import {Result} from "../content-component/result/result.model";
import {Question} from "../content-component/question/question.model";
import {Answer} from "../shared/answer/answer.model";
import {Explanation} from "../content-component/explanation/explanation.model";
import {Video} from "../content-component/video/video.model";
import {ContentDAO} from "../content.DAO";

@Injectable({
  providedIn: 'root'
})
export class ContentTreeService {
  private contents: Content[];
  private root: Node;

  constructor() {
  }

  public getRoot(): Node {
    return this.root;
  }

  public create(contents: Content[]): Node {
    this.contents = contents;
    const iterator: Iterator<Content> = new Iterator<Content>(this.contents);
    this.root = this.construct(iterator);
    return this.root;
  }

  private construct(iterator: Iterator<Content>): Node {
    if (!iterator.hasNext()) {
      return null;
    }

    const content: Content = iterator.next();
    const node: Node = new Node(content);

    if (!(content instanceof Result)) {
      for (let answer of node.content.answers) {
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

    let value: string = node.content.value + " => ";

    for(let answer of node.content.answers) {
      value += answer.value + ", ";
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
