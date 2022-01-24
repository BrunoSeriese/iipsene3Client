import {Node} from "../../../content/tree/node.model";

export class SharedNodeService{

  selectedNode: Node;
  constructor() {
  }

  updateSelectedNode(node: Node){
    this.selectedNode = node;

  }




}
