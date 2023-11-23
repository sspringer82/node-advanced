# Aufgabe 9 - Validierung

1. Installation: `npm add class-validator class-transformer`
2. ValidationPipe integrieren (`main.ts`):  app.useGlobalPipes(new ValidationPipe());
3. Validierungsregeln in der Entität definieren
   1. Titel und Autor sind Pflichfelder
   2. price muss eine Zahl sein und maximal 200
   3. pages muss eine Zahl zwischen 10 und 1000 sein
   4. year darf nicht kleiner als 1600 und nicht größer als 2024 sein