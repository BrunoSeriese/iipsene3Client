import { Injectable } from '@angular/core';
import {Content} from "./content.interface";
import {ContentTreeService} from "./tree/content-tree.service";
import {Node} from "./tree/node.model";

@Injectable({
  providedIn: 'root'
})
export class ContentService {
  private currentNode: Node = this.contentTree.getRoot();
  private lastNodeArray: Node[] = [];

  constructor(private contentTree: ContentTreeService) { }

  public setNextNode(node: Node): void {
    this.lastNodeArray.push(this.currentNode);
    this.currentNode = node;
  }

  public getLastNodeArray(): Node[] {
    return this.lastNodeArray;
  }

  public setLastNode(): void {
    if (!this.isArrayEmpty(this.lastNodeArray)){
      this.currentNode = this.lastNodeArray.pop();
    }
  }

  public getContent(): Content {
    return this.currentNode != null ? this.currentNode.content : null;
  }

  public getNodeByAnswerIndex(index: number): Node {
    return this.contentTree.getNodeByAnswerIndex(this.currentNode, index);
  }

  public isArrayEmpty(array: unknown[]): boolean {
    return array == null || array.length == 0;
  }
}
