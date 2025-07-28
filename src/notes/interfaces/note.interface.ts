
export interface NoteService {
  Create(data: any): any
  Get(data: { id: number }): any
  GetAll(data: {}): any
  Update(data: any): any
  Delete(data: { id: number }): any
}
