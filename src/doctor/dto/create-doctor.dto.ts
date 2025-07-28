import { IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateDoctorDto {
  @ApiProperty({
    example: 'Dr. Alisher Karimov',
    description: 'Shifokorning to‘liq ismi',
  })
  @IsString()
  name: string;

  @ApiProperty({
    example: 'alisher.karimov@example.com',
    description: 'Shifokorning elektron pochtasi',
  })
  @IsString()
  email: string;

  @ApiProperty({
    example: 'StrongP@ssw0rd!',
    description: 'Shifokorning paroli',
  })
  @IsString()
  password: string;
}
