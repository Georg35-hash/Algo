class Stack {

  constructor() {

    this.items = [];

  }

  empty() {

    return this.items.length === 0;

  }

  push(element) {

    this.items.push(element);

  }

  pop() {

    if (this.empty()) return null;

    return this.items.pop();

  }

  peek() {

    if (this.empty()) return null;

    return this.items[this.items.length - 1];

  }

  search(element) {

    for (let i = this.items.length - 1, pos = 0; i >= 0; i--, pos++) {

      if (this.items[i] === element) return pos;

    }

    return -1;

  }

}

