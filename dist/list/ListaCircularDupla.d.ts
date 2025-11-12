import type { ContratoListaDupla } from "./ContratoListaDupla.js";
export declare class ListaCircularDupla<T> implements ContratoListaDupla<T>, Iterable<T> {
    private head;
    private tail;
    private count;
    size(): number;
    isEmpty(): boolean;
    add(value: T): void;
    remove(value: T): boolean;
    get(index: number): T | undefined;
    [Symbol.iterator](): Iterator<T>;
}
//# sourceMappingURL=ListaCircularDupla.d.ts.map