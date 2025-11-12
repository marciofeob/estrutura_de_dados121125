export class NodeDuplo<T> {
  public next: NodeDuplo<T> | null = null;
  public prev: NodeDuplo<T> | null = null;
  constructor(public value: T) {}
}
