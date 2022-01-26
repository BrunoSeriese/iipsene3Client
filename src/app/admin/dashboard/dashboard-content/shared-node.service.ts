import {Node} from "../../../content/tree/node.model";

export class SharedNodeService{
  private _selectedNode: Node;
  private _nodes: Node;

  public updateSelectedNode(node: Node){
    this._selectedNode = node;
  }

  public get selectedNode(): Node {
    return this._selectedNode;
  }

  get nodes(): Node {
    return this._nodes;
  }

  set nodes(value: Node) {
    this._nodes = value;
  }

  public getLowestNonExistingId(list: number[], first: number, last: number) {
    if (first > last) {
      return last + 2;
    }

    if (first != list[first] - 1) {
      return first + 1;
    }

    let mid: number = Math.trunc((first + last) / 2);

    if (list[mid] - 1 == mid) {
      return this.getLowestNonExistingId(list, mid + 1, last);
    }
    return this.getLowestNonExistingId(list, first, mid);
  }

  public getContentIds(node: Node, contentIds: number[]): number[] {
    if(node == null) {
      return;
    }

    contentIds.push(node.content.id);

    for(let child of node.getChildren()) {
      this.getContentIds(child, contentIds);
    }
    return contentIds;
  }

  public getAnswerIds(node: Node, answerIds: number[]): number[] {
    if(node == null) {
      return;
    }

    node.content.answers.forEach(answer => {
      answerIds.push(answer.id);
    })

    for(let child of node.getChildren()) {
      this.getAnswerIds(child, answerIds);
    }
    return answerIds;
  }
}
