import { IsInt, IsNotEmpty, IsString } from "class-validator";
import { ApiProperty } from "@nestjs/swagger";

export class CreatePatientDto {
  @ApiProperty({
    description: "Bemorning to‘liq ismi",
    example: "John Doe",
  })
  @IsNotEmpty()
  @IsString()
  name: string;

  @ApiProperty({
    description: "Tug‘ilgan sana (formatda)",
    example: "1990-01-01",
  })
  @IsNotEmpty()
  @IsString()
  dob: string;

  @ApiProperty({
    description: "Bog‘liq bo‘lgan doctorning ID raqami",
    example: 1,
  })
  @IsNotEmpty()
  @IsInt()
  doctorId: number;
}
