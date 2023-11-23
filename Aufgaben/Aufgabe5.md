# Aufgabe 5 - book module

1. Erzeuge ein neues Modul mit dem Kommando `nest g module books`
2. Erzeuge einen neuen Controller mit dem Kommando `nest g controller books`
3. Erzeuge einen neuen Service mit dem Kommando `nest g service books`

Erzeuge einen Endpunkt, der eine Liste von Büchern zurückgibt. Pfad: `GET /books`

Datenstruktur:
```ts
class Books {
  id: number;
  title: string;
  author: string;
  price: number;
  pages: number;
  year: number;
}
```