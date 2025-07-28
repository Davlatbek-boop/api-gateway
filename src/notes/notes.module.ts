import { Module } from "@nestjs/common";
import { ClientsModule, Transport } from "@nestjs/microservices";
import { join } from "path";
import { NotesController } from "./notes.controller";

@Module({
  imports: [
    ClientsModule.register([
      {
        name: "NOTE_PACKAGE",
        transport: Transport.GRPC,
        options: {
          url: "0.0.0.0:50052",
          package: "patient",
          protoPath: join(process.cwd(), "src/proto/patient.proto"),
        },
      },
    ]),
  ],
  controllers: [NotesController],
})
export class NotesModule {}
