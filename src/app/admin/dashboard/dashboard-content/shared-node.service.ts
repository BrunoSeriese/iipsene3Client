import {Node} from "../../../content/tree/node.model";

export class SharedNodeService{
  private _selectedNode: Node;

  public updateSelectedNode(node: Node){
    this._selectedNode = node;
  }

  public get selectedNode(): Node {
    return this._selectedNode;
  }
}
