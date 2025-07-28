import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Patch,
  Delete,
  Inject,
  OnModuleInit,
} from '@nestjs/common';
import { ClientGrpc } from '@nestjs/microservices';
import { Observable, lastValueFrom } from 'rxjs';
import { CreateNoteDto } from './dto/create-note.dto';
import { UpdateNoteDto } from './dto/update-note.dto';
import {
  ApiTags,
  ApiOperation,
  ApiResponse,
  ApiParam,
  ApiBody,
} from '@nestjs/swagger';
import { NoteService } from './interfaces/note.interface';

@ApiTags('Notes')
@Controller('notes')
export class NotesController implements OnModuleInit {
  private noteService: NoteService;

  constructor(@Inject('NOTE_PACKAGE') private readonly client: ClientGrpc) {}

  onModuleInit() {
    this.noteService = this.client.getService<NoteService>('NoteService');
  }

  @Post()
  @ApiOperation({ summary: 'Create a new note' })
  @ApiBody({ type: CreateNoteDto })
  @ApiResponse({ status: 201, description: 'Note created successfully' })
  create(@Body() body: CreateNoteDto): Observable<any> {
    return this.noteService.Create(body);
  }

  @Get()
  @ApiOperation({ summary: 'Get all notes' })
  @ApiResponse({ status: 200, description: 'List of notes retrieved successfully' })
  async getAll(): Promise<any> {
    return await lastValueFrom(this.noteService.GetAll({}));
  }

  @Get(':id')
  @ApiOperation({ summary: 'Get a note by ID' })
  @ApiParam({ name: 'id', type: Number })
  @ApiResponse({ status: 200, description: 'Note retrieved successfully' })
  getOne(@Param('id') id: string): Observable<any> {
    return this.noteService.Get({ id: +id });
  }

  @Patch(':id')
  @ApiOperation({ summary: 'Update a note by ID' })
  @ApiParam({ name: 'id', type: Number })
  @ApiBody({ type: UpdateNoteDto })
  @ApiResponse({ status: 200, description: 'Note updated successfully' })
  update(
    @Param('id') id: string,
    @Body() dto: UpdateNoteDto,
  ): Observable<any> {
    return this.noteService.Update({ id: +id, ...dto });
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Delete a note by ID' })
  @ApiParam({ name: 'id', type: Number })
  @ApiResponse({ status: 200, description: 'Note deleted successfully' })
  remove(@Param('id') id: string): Observable<any> {
    return this.noteService.Delete({ id: +id });
  }
}
