import { Module } from "@nestjs/common";
import { ClientsModule, Transport } from "@nestjs/microservices";
import { join } from "path";
import { PatientController } from "./patient.controller";

@Module({
  imports: [
    ClientsModule.register([
      {
        name: "PATIENT_PACKAGE",
        transport: Transport.GRPC,
        options: {
          url: "0.0.0.0:50052",
          package: "patient",
          protoPath: join(process.cwd(), "src/proto/patient.proto"),
        },
      },
    ]),
  ],
  controllers: [PatientController],
})
export class PatientModule {}
