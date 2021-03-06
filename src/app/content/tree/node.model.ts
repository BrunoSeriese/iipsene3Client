
import {Content} from "../content";

export class Node {
  private children: Node[] = [];

  constructor(public content: Content) { }

  public getChildren(): Node[] {
    return this.children;
  }

  public addChild(child: Node): void {
    this.children.push(child);
  }

  public removeChild(child: Node): void {
    this.children.splice(this.children.indexOf(child), 1);
  }

  public removeChildren(): void {
    this.children = [];
  }

}
