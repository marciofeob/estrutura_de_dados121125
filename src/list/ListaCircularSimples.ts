import { NodeSimples } from "./NodeSimples.js";
import type { ContratoListaSimples } from "./ContratoListaSimples.js";

export class ListaCircularSimples<T> implements ContratoListaSimples<T>, Iterable<T> {
  private head: NodeSimples<T> | null = null;
  private tail: NodeSimples<T> | null = null;
  private count: number = 0;

  public size(): number {
    return this.count;
  }

  public isEmpty(): boolean {
    return this.count === 0;
  }

  public add(value: T): void {
    const newNode = new NodeSimples(value);

    if (this.isEmpty()) {
      this.head = newNode;
      this.tail = newNode;
      newNode.next = this.head;
    } else {
      newNode.next = this.head; 
      this.tail!.next = newNode; 
      this.tail = newNode; 
    }
    this.count++;
  }

  public remove(value: T): boolean {
    if (this.isEmpty()) {
      return false;
    }

    let current = this.head!;
    let previous = this.tail!;
    let found = false;

    for (let i = 0; i < this.count; i++) {
      if (current.value === value) {
        found = true;
        break;
      }
      previous = current;
      current = current.next!;
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
      this.tail!.next = this.head;
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

  public get(index: number): T | undefined {
    if (index < 0 || index >= this.count || this.isEmpty()) {
      return undefined;
    }

    let current = this.head!;
    for (let i = 0; i < index; i++) {
      current = current.next!;
    }
    return current.value;
  }
  [Symbol.iterator](): Iterator<T> {
    let current = this.head;
    let itemsIterated = 0;

    return {
      next: (): IteratorResult<T> => {
        if (current === null || itemsIterated >= this.count) {
          return { value: undefined, done: true };
        } else {
          const value = current.value;
          current = current.next;
          itemsIterated++;
          return { value: value, done: false };
        }
      },
    };
  }
}
