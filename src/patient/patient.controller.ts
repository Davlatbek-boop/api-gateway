import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Put,
  Delete,
  Inject,
  OnModuleInit,
  Patch,
} from "@nestjs/common";
import { ClientGrpc } from "@nestjs/microservices";
import { PatientService } from "./interfaces/patient.interface";
import { Observable, lastValueFrom } from "rxjs";
import {
  ApiTags,
  ApiOperation,
  ApiResponse,
  ApiParam,
  ApiBody,
} from "@nestjs/swagger";
import { CreatePatientDto } from "./dto/create-patient.dto";
import { UpdatePatientDto } from "./dto/update-patient.dto";

@ApiTags("Patients")
@Controller("patients")
export class PatientController implements OnModuleInit {
  private patientService: PatientService;

  constructor(@Inject("PATIENT_PACKAGE") private readonly client: ClientGrpc) {}

  onModuleInit() {
    this.patientService =
      this.client.getService<PatientService>("PatientService");
  }

  @Post()
  @ApiOperation({ summary: "Create a new patient" })
  @ApiBody({ type: CreatePatientDto })
  @ApiResponse({ status: 201, description: "Patient created successfully" })
  create(@Body() body: CreatePatientDto): Observable<any> {
    return this.patientService.Create(body);
  }

  @Get()
  @ApiOperation({ summary: "Get all patients" })
  @ApiResponse({
    status: 200,
    description: "List of patients returned successfully",
  })
  async getAll() {
    return await lastValueFrom(this.patientService.GetAll({}));
  }

  @Get(":id")
  @ApiOperation({ summary: "Get a patient by ID" })
  @ApiParam({ name: "id", type: Number })
  @ApiResponse({ status: 200, description: "Patient returned successfully" })
  get(@Param("id") id: string): Observable<any> {
    return this.patientService.Get({ id: +id });
  }

  @Patch(":id")
  @ApiOperation({ summary: "Update a patient by ID" })
  @ApiParam({ name: "id", type: Number })
  @ApiBody({ type: UpdatePatientDto })
  @ApiResponse({ status: 200, description: "Patient updated successfully" })
  update(
    @Param("id") id: string,
    @Body() dto: UpdatePatientDto
  ): Observable<any> {
    return this.patientService.Update({ id: +id, ...dto });
  }

  @Delete(":id")
  @ApiOperation({ summary: "Delete a patient by ID" })
  @ApiParam({ name: "id", type: Number })
  @ApiResponse({ status: 200, description: "Patient deleted successfully" })
  delete(@Param("id") id: string): Observable<any> {
    return this.patientService.Delete({ id: +id });
  }
}
