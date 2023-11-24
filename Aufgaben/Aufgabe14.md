# Aufgabe 14

Schreibe ein Funktion "readFromFile", die den Inhalt einer Textdatei liest und ihn zurückgibt.

Erzeuge dafür die Datei "input.txt" mit beliebigem Inhalt.

Lies den Inhalt mit folgenden Methoden aus:

1. node:fs -> readFileSync => `const data = readFileSync('input.txt', 'utf-8');`
2. node:fs -> readFile => `readFile('input.txt', 'utf-8', (error, data) => {...});`
3. node:fs/promises -> readFile <= wichtigster Fall `const promise = readFile('input.txt', 'utf-8');`