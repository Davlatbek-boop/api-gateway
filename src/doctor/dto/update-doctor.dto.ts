import { ApiProperty } from '@nestjs/swagger';

export class UpdateDoctorDto {
  @ApiProperty({
    example: 'Dr. Alisher Karimov',
    description: 'Doctor\'s full name',
  })
  name: string;

  @ApiProperty({
    example: 'alisher.karimov@example.com',
    description: 'Doctor\'s email address',
  })
  email: string;

  @ApiProperty({
    example: 'securePassword123',
    description: 'Doctor\'s password',
  })
  password: string;
}
