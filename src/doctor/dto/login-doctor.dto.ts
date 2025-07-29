import { ApiProperty } from "@nestjs/swagger";

export class LoginDoctorDto {
  @ApiProperty({
    example: "alisher.karimov@example.com",
    description: "Shifokorning elektron pochtasi",
  })
  email!: string;

  @ApiProperty({
    example: "StrongP@ssw0rd!",
    description: "Shifokorning paroli",
  })
  password!: string;
}
