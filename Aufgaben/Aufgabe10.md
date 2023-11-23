# Aufgabe 10 - Authentication

1. Installation: `npm add @nestjs/jwt @nestjs/passport passport passport-jwt passport-local` `npm add -D @types/passport-jwt @types/passport-local`
2. Strukturen definieren:
   1. `nest g mo auth`
   2. `nest g s auth`
   3. `nest g co auth`
   4. `src/auth/jwt-auth.guard.ts` `src/auth/jwt.strategy.ts`
3. Auth Module - PassportModule + JwtModule integrieren
4. Auth Service - login Methode - user + passwort prüfen und token signieren
5. Auth Controller - @Post für username + passwort - gibt an Service weiter
6. jwt strategy konfigurieren - verifiziert das token
7. jwt auth guard - schützt die Endpunkte
8. Controller mit @UseGuards(JwtAuthGuard) schützen