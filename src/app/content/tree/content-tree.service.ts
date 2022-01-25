import {Injectable} from '@angular/core';
import {Node} from "./node.model";
import {Iterator} from "./iterator.model";
import {ContentModel} from "../content.model";

@Injectable({
  providedIn: 'root'
})
export class ContentTreeService {
  private contents: ContentModel[];
  private root: Node;
  private parent: Node;

  constructor() {
  }

  public getRoot(): Node {
    return this.root;
  }

  public create(contents: ContentModel[]): Node {
    this.contents = contents;
    const iterator: Iterator<ContentModel> = new Iterator<ContentModel>(this.contents);
    this.root = this.construct(iterator);
    return this.root;
  }

  private construct(iterator: Iterator<ContentModel>): Node {
    if (!iterator.hasNext()) {

      return null;
    }

    const content: ContentModel = iterator.next();
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

  public height(node: Node): number {
    let totalHeight: number = 0;

    if(node == null) {
      return totalHeight;
    }

    for(let child of node.getChildren()) {
      let currentHeight: number = this.height(child);

      if (currentHeight > totalHeight) {
        totalHeight = currentHeight;
      }
    }

    return ++totalHeight;
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
