import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString, IsNumber } from 'class-validator';

export class CreateNoteDto {
  @ApiProperty({
    example: 'Patient has a mild fever and needs rest.',
    description: 'The text of the note',
  })
  @IsNotEmpty()
  @IsString()
  text: string;

  @ApiProperty({
    example: 3,
    description: 'The ID of the visit associated with this note',
  })
  @IsNotEmpty()
  @IsNumber()
  visit_id: number;
}
