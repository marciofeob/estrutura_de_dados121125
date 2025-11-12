export interface ContratoListaSimples<T> {
  isEmpty(): boolean;
  size(): number;
  add(value: T): void;
  remove(value: T): boolean;
  get(index: number): T | undefined;
  [Symbol.iterator](): Iterator<T>;
}
