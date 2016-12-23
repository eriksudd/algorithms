import expect from 'expect';

class Stack {
  constructor() {
    this.items = [];
  }

  push(item) {
    const { items } = this;
    items.push(item);
  }

  pop() {
    const { items } = this;
    return items.pop();
  }

  peek() {
    const { items } = this;
    const length = items.length;
    return items[length - 1];
  }

  isEmpty() {
    const { items } = this;
    return items.length === 0;
  }

  clear() {
    const { items } = this;
    const temp = [...items];
    this.items = [];
    return temp;
  }

  size() {
    const { items } = this;
    return items.length;
  }

  getItems() {
    const { items } = this;
    return items;
  }
}

describe('Stack', () => {
  const stack = new Stack();

  it('calling push should add items to stack', () => {
    stack.push(1);
    stack.push(2);
    stack.push(3);
    expect(stack.getItems()).toEqual([1, 2, 3]);
  });

  it('calling pop should remove items from stack', () => {
    stack.pop();
    stack.pop();
    expect(stack.getItems()).toEqual([1]);
  });

  it('calling peek should return the top item of the stack', () => {
    expect(stack.peek()).toEqual(1);
  });

  it('calling isEmpty should return false if stack is not empty', () => {
    expect(stack.isEmpty()).toEqual(false);
  });

  it('calling size should return correct size of stack', () => {
    expect(stack.size()).toEqual(1);
  });

  it('calling clear should empty the stack', () => {
    stack.clear();
    expect(stack.size()).toEqual(0);
  });

  it('calling isEmpty should return true if stack is empty', () => {
    expect(stack.isEmpty()).toEqual(true);
  });
});

