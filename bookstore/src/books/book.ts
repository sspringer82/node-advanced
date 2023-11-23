import { ApiProperty, OmitType } from '@nestjs/swagger';
import { IsInt, IsNotEmpty, IsNumber, Max, Min } from 'class-validator';
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
  @IsNotEmpty()
  title: string;

  @ApiProperty({
    example: 'Me',
    description: 'The author of the book',
  })
  @Column()
  @IsNotEmpty()
  author: string;

  @ApiProperty({
    example: 17.99,
    description: 'The price of the book',
  })
  @Column()
  @IsNumber()
  @Max(200)
  price: number;

  @ApiProperty({
    example: 127,
    description: 'The number of pages of the book',
  })
  @Column()
  @IsInt()
  @Min(10)
  @Max(1_000)
  pages: number;

  @ApiProperty({
    example: 1970,
    description: 'The release year of the book',
  })
  @Column()
  @IsInt()
  @Min(1600)
  @Max(2024)
  year: number;
}

export class CreateBook extends OmitType(Book, ['id'] as const) {}
