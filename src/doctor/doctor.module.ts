import { Module } from "@nestjs/common";
import { DoctorController } from "./doctor.controller";
import { ClientsModule, Transport } from "@nestjs/microservices";
import { join } from "path";

@Module({
  imports: [
    ClientsModule.register([
      {
        name: "DOCTOR_PACKAGE",
        transport: Transport.GRPC,
        options: {
          url: "0.0.0.0:50051",
          package: "doctor",
          protoPath: join(process.cwd(), "src/proto/doctor.proto"),
        },
      },
    ]),
  ],
  controllers: [DoctorController],
})
export class DoctorModule {}
