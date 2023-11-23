import { ApiProperty } from '@nestjs/swagger';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('books')
export class Book {
  @ApiProperty({
    example: 1,
    description: 'The unique id',
  })
  @PrimaryGeneratedColumn()
  id: number;
  @ApiProperty({
    example: 'My book',
    description: 'The title of the book',
  })
  @Column()
  title: string;
  @ApiProperty({
    example: 'Me',
    description: 'The author of the book',
  })
  @Column()
  author: string;
  @ApiProperty({
    example: 17.99,
    description: 'The price of the book',
  })
  @Column()
  price: number;
  @ApiProperty({
    example: 127,
    description: 'The number of pages of the book',
  })
  @Column()
  pages: number;
  @ApiProperty({
    example: 1970,
    description: 'The release year of the book',
  })
  @Column()
  year: number;
}

export type CreateBook = Omit<Book, 'id'>;
