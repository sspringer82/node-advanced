# Aufgabe 6 - Datenbank

1. Installation: `npm install @nestjs/typeorm typeorm sql.js`
2. Konfiguration des app.module.ts: in imports:
   ```ts
   TypeOrmModule.forRoot({
      synchronize: true,
      logging: false,
      autoSave: true,
      location: 'database.sqlite',
      entities: [Book],
      migrations: [],
      subscribers: [],
      type: 'sqljs',
    })
    ```
3. Konfiguration des books.module.ts: in imports: `TypeOrmModule.forFeature([Book])`
4. Anlegen der Entity-Class: 
```ts
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('books')
export class Book {
  @PrimaryGeneratedColumn()
  id: number;
  @Column()
  title: string;
  @Column()
  author: string;
  @Column()
  price: number;
  @Column()
  pages: number;
  @Column()
  year: number;
}
```
5. Im service verwenden:
```ts
constructor(
    @InjectRepository(Book) private readonly booksRepository: Repository<Book>,
  ) {}
```


## CRUD API
Erzeuge folgende Pfade:

* GET /books => liest alle Bücher aus
* GET /books/:id => liest ein Buch aus `findOne(@Param() params: any): string {`
* POST /books => erzeugt ein Buch `async create(@Body() createCatDto: CreateCatDto) {`
* PUT /books/:id => aktualisiert ein Buch
* DELETE /books/:id => löscht ein Buch