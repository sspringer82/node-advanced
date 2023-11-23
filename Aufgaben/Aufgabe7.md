# Aufgabe 7 - .env

Mache die Portnummer in der `main.ts` über eine Umgebungskonfiguration konfigurierbar.

Die Umgebungsvariable liegt in einer Datei mit dem Namen .env im Root-Verzeichnis

Variante 1: https://www.npmjs.com/package/dotenv

Variante 2: ab Node v.20.6 --env-file=.env => process.env

## Aufgabe 7a - DB Location konfigurierbar machen

1. Installation: `npm add @nestjs/config`
2. Im app.module.ts:

```ts
imports: [
  ConfigModule.forRoot({ isGlobal: true }),
  BooksModule,
  TypeOrmModule.forRootAsync({
    imports: [ConfigModule],
    useFactory: async (configService: ConfigService) => ({
      synchronize: true,
      logging: false,
      autoSave: true,
      location: configService.get<string>('DATABASE_LOCATION'),
      entities: [Book],
      migrations: [],
      subscribers: [],
      type: 'sqljs',
    }),
    inject: [ConfigService],
  }),
],
```

3. .env-Datei im Wurzelverzeichnis der Applikation: `DATABASE_LOCATION="database.sqlite"`