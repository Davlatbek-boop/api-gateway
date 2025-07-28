import { Module } from "@nestjs/common";
import { DoctorModule } from "./doctor/doctor.module";
import { PatientModule } from "./patient/patient.module";
import { ConfigModule } from "@nestjs/config";
import { NotesModule } from './notes/notes.module';
import { VisitsModule } from './visits/visits.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    DoctorModule,
    PatientModule,
    NotesModule,
    VisitsModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
