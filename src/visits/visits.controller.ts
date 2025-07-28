import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Put,
  Delete,
  Inject,
  ParseIntPipe,
} from "@nestjs/common";
import { ClientGrpc } from "@nestjs/microservices";
import { ApiTags, ApiOperation, ApiResponse, ApiBody } from "@nestjs/swagger";
import { Observable } from "rxjs";

import { CreateVisitDto } from "./dto/create-visit.dto";
import { UpdateVisitDto } from "./dto/update-visit.dto";
import { VisitService } from "./interfaces/visit.interface";

@ApiTags("Visits")
@Controller("visits")
export class VisitsController {
  private visitService: VisitService;

  constructor(@Inject("VISIT_PACKAGE") private client: ClientGrpc) {}

  onModuleInit() {
    this.visitService = this.client.getService<VisitService>("VisitService");
  }

  @Post()
  @ApiOperation({ summary: "Create a new visit" })
  @ApiBody({ type: CreateVisitDto })
  @ApiResponse({ status: 201, description: "Visit created" })
  create(@Body() body: CreateVisitDto) {
    return this.visitService.Create(body);
  }

  @Get()
  @ApiOperation({ summary: "Get all visits" })
  @ApiResponse({ status: 200, description: "List of all visits" })
  findAll() {
    return this.visitService.GetAll({});
  }

  @Get(":id")
  @ApiOperation({ summary: "Get visit by ID" })
  @ApiResponse({ status: 200, description: "Visit data by ID" })
  findOne(@Param("id", ParseIntPipe) id: number) {
    return this.visitService.Get({ id });
  }

  @Put(":id")
  @ApiOperation({ summary: "Update visit by ID" })
  @ApiBody({ type: UpdateVisitDto })
  @ApiResponse({ status: 200, description: "Updated visit data" })
  update(@Param("id", ParseIntPipe) id: number, @Body() body: UpdateVisitDto) {
    return this.visitService.Update(body);
  }

  @Delete(":id")
  @ApiOperation({ summary: "Delete visit by ID" })
  @ApiResponse({ status: 200, description: "Visit deleted" })
  remove(
    @Param("id", ParseIntPipe) id: number
  ): Observable<{ message: string }> {
    return this.visitService.Delete({ id });
  }
}
