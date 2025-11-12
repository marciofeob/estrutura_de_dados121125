import { NodeSimples } from "./NodeSimples.js";
export class ListaCircularSimples {
    head = null;
    tail = null;
    count = 0;
    size() {
        return this.count;
    }
    isEmpty() {
        return this.count === 0;
    }
    add(value) {
        const newNode = new NodeSimples(value);
        if (this.isEmpty()) {
            this.head = newNode;
            this.tail = newNode;
            newNode.next = this.head;
        }
        else {
            newNode.next = this.head;
            this.tail.next = newNode;
            this.tail = newNode;
        }
        this.count++;
    }
    remove(value) {
        if (this.isEmpty()) {
            return false;
        }
        let current = this.head;
        let previous = this.tail;
        let found = false;
        for (let i = 0; i < this.count; i++) {
            if (current.value === value) {
                found = true;
                break;
            }
            previous = current;
            current = current.next;
        }
        if (!found) {
            return false;
        }
        if (this.count === 1) {
            this.head = null;
            this.tail = null;
        }
        else if (current === this.head) {
            this.head = this.head.next;
            this.tail.next = this.head;
        }
        else if (current === this.tail) {
            this.tail = previous;
            this.tail.next = this.head;
        }
        else {
            previous.next = current.next;
        }
        this.count--;
        return true;
    }
    get(index) {
        if (index < 0 || index >= this.count || this.isEmpty()) {
            return undefined;
        }
        let current = this.head;
        for (let i = 0; i < index; i++) {
            current = current.next;
        }
        return current.value;
    }
    [Symbol.iterator]() {
        let current = this.head;
        let itemsIterated = 0;
        return {
            next: () => {
                if (current === null || itemsIterated >= this.count) {
                    return { value: undefined, done: true };
                }
                else {
                    const value = current.value;
                    current = current.next;
                    itemsIterated++;
                    return { value: value, done: false };
                }
            },
        };
    }
}
//# sourceMappingURL=ListaCircularSimples.js.map