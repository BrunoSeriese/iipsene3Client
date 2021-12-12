import {Content} from "../content.interface";

export class Node {
  private children: Node[] = [];

  constructor(public readonly content: Content) { }

  public getChildren(): Node[] {
    return this.children;
  }

  public addChild(child: Node): void {
    this.children.push(child);
  }

}
