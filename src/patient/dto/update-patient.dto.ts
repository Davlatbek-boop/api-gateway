import { ApiProperty } from '@nestjs/swagger';

export class UpdatePatientDto {
  @ApiProperty({ example: 'Ali Valiyev', description: 'Patient full name' })
  name: string;

  @ApiProperty({ example: '1998-12-05', description: 'Date of birth (YYYY-MM-DD)' })
  dob: string;

  @ApiProperty({ example: 3, description: 'Assigned doctor ID' })
  doctorId: number;
}
