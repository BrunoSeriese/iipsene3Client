import { Injectable } from '@angular/core';
import {Content} from "./content.interface";
import {ContentTreeService} from "./tree/content-tree.service";
import {Node} from "./tree/node.model";
import {ContentDAO} from "./content.DAO";

@Injectable({
  providedIn: 'root'
})
export class ContentService {
  private currentNode: Node = this.contentTree.getRoot();
  private lastNodeArray: Node[] = [];

  constructor(private contentDAO: ContentDAO, private contentTree: ContentTreeService) {

    this.contentDAO.getAll().subscribe(contents =>{
      this.currentNode = this.contentTree.create(contents)
    })

  }


  public setNextNode(node: Node): void {
    this.lastNodeArray.push(this.currentNode);
    this.currentNode = node;
  }

  public getLastNode(): Node {
    return this.lastNodeArray[0];
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

  public getPreviousAnswerIndexByCurrentNode(): number {
    let children: Node[] = this.getLastNode().getChildren();
    for (let i: number = 0; i < children.length; i++) {
      if(children[i] == this.currentNode) {
        return i;
      }
    }
    return null;
  }

  public isArrayEmpty(array: unknown[]): boolean {
    return array == null || array.length == 0;
  }


}
