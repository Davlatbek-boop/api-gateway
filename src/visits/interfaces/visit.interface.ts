
export interface VisitService {
  Create(data: any): any
  Get(data: { id: number }): any
  GetAll(data: any): any
  Update(data: any): any
  Delete(data: { id: number }): any
}
