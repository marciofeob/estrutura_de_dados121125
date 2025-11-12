import type { ContratoListaSimples } from "./ContratoListaSimples.js";
export declare class ListaCircularSimples<T> implements ContratoListaSimples<T>, Iterable<T> {
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
//# sourceMappingURL=ListaCircularSimples.d.ts.map