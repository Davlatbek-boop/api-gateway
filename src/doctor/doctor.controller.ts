import {
  Controller,
  Get,
  Post,
  Param,
  Body,
  Put,
  Delete,
  OnModuleInit,
  Inject,
  Patch,
} from '@nestjs/common';
import { ClientGrpc } from '@nestjs/microservices';
import { Observable, lastValueFrom } from 'rxjs';
import { CreateDoctorDto } from './dto/create-doctor.dto';
import { UpdateDoctorDto } from './dto/update-doctor.dto';
import { DoctorService } from './interfaces/doctor.interface';
import {
  ApiTags,
  ApiOperation,
  ApiResponse,
  ApiParam,
  ApiBody,
} from '@nestjs/swagger';

@ApiTags('Doctors')
@Controller('doctors')
export class DoctorController implements OnModuleInit {
  private doctorService: DoctorService;

  constructor(
    @Inject('DOCTOR_PACKAGE') private readonly client: ClientGrpc,
  ) {}

  onModuleInit() {
    this.doctorService = this.client.getService<DoctorService>('DoctorService');
  }

  @Get()
  @ApiOperation({ summary: 'Get all doctors' })
  @ApiResponse({ status: 200, description: 'List of doctors returned successfully' })
  async findAll() {
    const response = await lastValueFrom(this.doctorService.FindAll({}));
    console.log(response);
    return response.doctors;
  }

  @Get(':id')
  @ApiOperation({ summary: 'Get doctor by ID' })
  @ApiParam({ name: 'id', type: Number, description: 'Doctor ID' })
  @ApiResponse({ status: 200, description: 'Doctor found' })
  @ApiResponse({ status: 404, description: 'Doctor not found' })
  findOne(@Param('id') id: string): Observable<any> {
    return this.doctorService.FindOne({ id: +id });
  }

  @Post()
  @ApiOperation({ summary: 'Create new doctor' })
  @ApiBody({ type: CreateDoctorDto })
  @ApiResponse({ status: 201, description: 'Doctor created successfully' })
  create(@Body() dto: CreateDoctorDto): Observable<any> {
    return this.doctorService.Create(dto);
  }

  @Patch(':id')
  @ApiOperation({ summary: 'Update doctor' })
  @ApiParam({ name: 'id', type: Number, description: 'Doctor ID' })
  @ApiBody({ type: UpdateDoctorDto })
  @ApiResponse({ status: 200, description: 'Doctor updated successfully' })
  update(@Param('id') id: string, @Body() dto: UpdateDoctorDto): Observable<any> {
    return this.doctorService.Update({ ...dto, id: +id });
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Delete doctor' })
  @ApiParam({ name: 'id', type: Number, description: 'Doctor ID' })
  @ApiResponse({ status: 200, description: 'Doctor deleted successfully' })
  remove(@Param('id') id: string): Observable<any> {
    return this.doctorService.Remove({ id: +id });
  }
}
