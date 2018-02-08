const CreateLinkedList = require('./linkedlist.js');
const linkedList = require('./createlinkedlist.js');
const Node = require('./node.js');

describe('node', () => {
  test(' file should return function', () => {
    expect(typeof (Node)).toBe('function');
  });
  test('function node return function', () => {
    expect(typeof (new Node(1))).toBe('object');
  });
});
describe('linkedList', () => {
  test(' file should return function', () => {
    expect(typeof (CreateLinkedList)).toBe('function');
  });
  test('function CreateLinkedList return function', () => {
    expect(typeof (new CreateLinkedList())).toBe('object');
  });
});
describe('CreatelinkedList', () => {
  test('linked list returns an object', () => {
    expect(typeof (linkedList)).toBe('object');
  });
  test('linked list created and elements added', () => {
    let tempHead = linkedList.Head;
    let length = 0;
    while (tempHead !== null) {
      length += 1;
      tempHead = tempHead.next;
    }
    expect(length).toBe(4);
  });
});
