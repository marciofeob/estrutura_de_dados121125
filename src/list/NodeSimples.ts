export class NodeSimples<T> {
  public next: NodeSimples<T> | null = null;
  constructor(public value: T) {}
}
