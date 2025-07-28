import { IsDateString, IsNumber } from "class-validator";
import { ApiProperty } from "@nestjs/swagger";

export class CreateVisitDto {
  @ApiProperty({
    example: 2,
    description: "Bemorning ID raqami (Patient ID)",
  })
  @IsNumber()
  patientId: number;

  @ApiProperty({
    example: "2025-07-28T10:30:00Z",
    type: String,
    format: "date-time",
  })
  @IsDateString()
  visitDate: string;
}
