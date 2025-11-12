import { NodeDuplo } from "./NodeDuplo.js";
export class ListaCircularDupla {
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
        const newNode = new NodeDuplo(value);
        if (this.isEmpty()) {
            this.head = newNode;
            this.tail = newNode;
            newNode.next = this.head;
            newNode.prev = this.head;
        }
        else {
            newNode.next = this.head;
            newNode.prev = this.tail;
            this.head.prev = newNode;
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
        let found = false;
        for (let i = 0; i < this.count; i++) {
            if (current.value === value) {
                found = true;
                break;
            }
            current = current.next;
        }
        if (!found) {
            return false;
        }
        if (this.count === 1) {
            this.head = null;
            this.tail = null;
        }
        else {
            current.prev.next = current.next;
            current.next.prev = current.prev;
            if (current === this.head) {
                this.head = current.next;
            }
            if (current === this.tail) {
                this.tail = current.prev;
            }
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
//# sourceMappingURL=ListaCircularDupla.js.map