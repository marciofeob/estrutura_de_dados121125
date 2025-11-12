import { ListaCircularSimples } from "./list/ListaCircularSimples.js";
import { ListaCircularDupla } from "./list/ListaCircularDupla.js";
console.log("Lista Simples - Carros");
const listaSimplesCarros = new ListaCircularSimples();
listaSimplesCarros.add("Fusca");
listaSimplesCarros.add("Gol");
listaSimplesCarros.add("Uno");
listaSimplesCarros.add("Celta");
console.log("Iterando lista de carros:");
for (const valor of listaSimplesCarros) {
    console.log(valor);
}
console.log("Tamanho:", listaSimplesCarros.size());
console.log("Get(2):", listaSimplesCarros.get(2));
console.log("Removendo o Gol");
listaSimplesCarros.remove("Gol");
console.log("Iterando após remover o Gol:");
for (const valor of listaSimplesCarros) {
    console.log(valor);
}
console.log("Tamanho:", listaSimplesCarros.size());
console.log("\nLista Dupla - Frutas");
const listaDuplaFrutas = new ListaCircularDupla();
listaDuplaFrutas.add("Maçã");
listaDuplaFrutas.add("Banana");
listaDuplaFrutas.add("Uva");
listaDuplaFrutas.add("Pera");
console.log("Iterando lista de frutas:");
for (const valor of listaDuplaFrutas) {
    console.log(valor);
}
console.log("Tamanho:", listaDuplaFrutas.size());
console.log("Get(0):", listaDuplaFrutas.get(0));
console.log("Removendo a Pera");
listaDuplaFrutas.remove("Pera");
console.log("Iterando após remover a Pera:");
for (const valor of listaDuplaFrutas) {
    console.log(valor);
}
console.log("Get(2):", listaDuplaFrutas.get(2));
console.log("Tamanho:", listaDuplaFrutas.size());
console.log("\nLista Simples - Notas");
const listaSimplesNotas = new ListaCircularSimples();
listaSimplesNotas.add(10);
listaSimplesNotas.add(8.5);
listaSimplesNotas.add(7);
listaSimplesNotas.add(9.5);
console.log("Iterando lista de notas:");
for (const valor of listaSimplesNotas) {
    console.log(valor);
}
console.log("Get(0) antes:", listaSimplesNotas.get(0));
console.log("Removendo 10 o Head");
listaSimplesNotas.remove(10);
console.log("Iterando após remover o 10:");
for (const valor of listaSimplesNotas) {
    console.log(valor);
}
console.log("Get(0) depois:", listaSimplesNotas.get(0));
console.log("Tamanho:", listaSimplesNotas.size());
console.log("\nLista Simples - Terefas");
const listaSimplesTarefas = new ListaCircularSimples();
listaSimplesTarefas.add("Comprar pão");
console.log("Iterando com 1 item:");
for (const valor of listaSimplesTarefas) {
    console.log(valor);
}
console.log("Tamanho antes:", listaSimplesTarefas.size());
console.log("Removendo Comprar pão na casa do João");
listaSimplesTarefas.remove("Comprar pão");
console.log("Iterando lista vazia:");
for (const valor of listaSimplesTarefas) {
    console.log(valor);
}
console.log("Tamanho depois:", listaSimplesTarefas.size());
console.log("Está vazia?", listaSimplesTarefas.isEmpty());
console.log("\nLista Dupla - Pontuações");
const listaDuplaPontos = new ListaCircularDupla();
listaDuplaPontos.add(500);
listaDuplaPontos.add(1200);
listaDuplaPontos.add(300);
listaDuplaPontos.add(750);
console.log("Iterando pontuações:");
for (const valor of listaDuplaPontos) {
    console.log(valor);
}
console.log("Tamanho:", listaDuplaPontos.size());
console.log("Tentando remover 9999 que não existe");
listaDuplaPontos.remove(9999);
console.log("Iterando (deve estar igual):");
for (const valor of listaDuplaPontos) {
    console.log(valor);
}
console.log("Tamanho deve ser 4:", listaDuplaPontos.size());
console.log("Removendo 500 o head");
listaDuplaPontos.remove(500);
console.log("Iterando após remover o 500:");
for (const valor of listaDuplaPontos) {
    console.log(valor);
}
console.log("Get(0) (novo head):", listaDuplaPontos.get(0));
console.log("Tamanho:", listaDuplaPontos.size());
//# sourceMappingURL=index.js.map