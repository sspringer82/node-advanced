# Aufgabe 1

Implementiere eine CRUD-API für Adressen. Folgende Pfade werden unterstützt:

Voraussetzungen: `npm add express`

GET / => liefert alle Adressen
GET /:id => liefert eine Adresse
POST / => erzeugt eine neue Adresse
PUT /:id => akutalisiert eine Adresse
DELETE /:id => löscht die Adresse

Zugriff auf die URL Pfad: request.params.id
Zugriff auf den Request Body: request.body - Achtung `express.json()` integrieren.

Daten werden lokal in einem Array vorgehalten.
