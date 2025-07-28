export interface PatientService {
  Create(data: { name: string; dob: string; doctorId: number }): any;
  Get(data: { id: number }): any;
  GetAll(data: {}): any;
  Update(data: { id: number; name: string; dob: string; doctorId: number }): any;
  Delete(data: { id: number }): any;
}
