# Aufgabe 3 - DB integration

Binde eine Sqlite3 DB an die Applikation an.

1. Installiere das sqlite3 Paket
2. Starte eine lesende Anfrage (alle Adressen)
3. Erzeuge, modifiziere und lösche Datensätze

Achtung: keine SQLInjections

Doku: https://github.com/TryGhost/node-sqlite3
API: https://github.com/TryGhost/node-sqlite3/wiki/API

DB erzeugen:
`sqlite3 mydb.sqlite3 < structure.sql`



```js
import sqlite3 from 'sqlite3';
const db = new sqlite3.Database('./db/db.sqlite3');
```

- lesender Zugriff: `get` und `all`
- schreibender Zugriff: `run` + Callback mit this.lastID

