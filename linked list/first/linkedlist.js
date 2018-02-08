const Node = require('./node.js');

function createLinkedList() {
  this.Head = null;
  this.insertIntoLinkedList = (data) => {
    const newNode = new Node(data);
    if (this.Head === null) {
      this.Head = newNode;
    } else {
      let tempHead = this.Head;
      while (tempHead.next !== null) {
        tempHead = tempHead.next;
      }
      tempHead.next = newNode;
    }
  };
  this.displayLinkedList = () => {
    if (this.Head === null) {
      console.log('nod elements in linkedlist');
    } else {
      let tempHead = this.Head;
      while (tempHead !== null) {
        console.log(tempHead.data);
        tempHead = tempHead.next;
      }
    }
  };
}
module.exports = createLinkedList;
