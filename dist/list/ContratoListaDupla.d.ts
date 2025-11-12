export interface ContratoListaDupla<T> {
    isEmpty(): boolean;
    size(): number;
    add(value: T): void;
    remove(value: T): boolean;
    get(index: number): T | undefined;
    [Symbol.iterator](): Iterator<T>;
}
//# sourceMappingURL=ContratoListaDupla.d.ts.map