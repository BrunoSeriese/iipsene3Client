import {Injectable} from '@angular/core';
import {Node} from "./node.model";
import {Iterator} from "./iterator.model";
import {Content} from "../content";

@Injectable({
  providedIn: 'root'
})
export class ContentTreeService {
  private contents: Content[];
  private root: Node;
  private parent: Node;

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

    if (!(content.type == "Result")) {
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

    for(let child of node.getChildren()) {
      this.display(child);
    }
  }

  public level(node: Node, value: Node, level: number): number {
    if(node == null) {
      return 0;
    }

    if(node == value) {
      return level;
    }

    for(let child of node.getChildren()) {
      let downLevel: number = this.level(child, value, level + 1);
      if(downLevel != 0) {
        return downLevel;
      }
    }
    return 0;
  }

  public getNodeByAnswerIndex(node: Node, index: number): Node {
    return node != null ? node.getChildren()[index] : null;
  }

  public getParentNodeByNode(current: Node, value: Node, parent: Node): Node {
    if(this.root == value) {
      return null;
    }

    if(current == value) {
      this.parent = parent;
    }

    for(let child of current.getChildren()) {
      this.getParentNodeByNode(child, value, current);
    }
    return this.parent;
  }

}
