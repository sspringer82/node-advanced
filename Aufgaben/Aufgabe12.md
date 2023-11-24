# Aufgabe 11 - Async

Teste den Fehlerfall in async.test.js

Ein Aufruf von doSomethingAsync(() => {}, true) soll einen Fehler verusachen. Das erste Argument der Callback-Funktion darf nicht Null sein, sondern musse in Fehlerobjekt sein.