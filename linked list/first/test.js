const LinkedList = require('./createlinkedlist.js');
const CreateLinkedList = require('./linkedlist.js');
const Node = require('./node.js');

describe('node', () => {
  test(' file should return function', () => {
    expect(typeof (Node)).toBe('function');
  });
  test('function return function', () => {
    expect(typeof (new Node(1))).toBe('object');
  });
});
describe('linkedList', () => {
  test(' file should return function', () => {
    expect(typeof (CreateLinkedList)).toBe('function');
  });
  test('function return function', () => {
    expect(typeof (new CreateLinkedList())).toBe('object');
  });
});
