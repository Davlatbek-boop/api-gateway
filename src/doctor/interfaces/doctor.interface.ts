import { Observable } from 'rxjs';

export interface DoctorService {
  Create(data: { name: string; email: string; password: any }): Observable<{
    id: number;
    name: string;
    email: string;
  }>;

  FindAll(data: {}): Observable<{
    doctors: {
      id: number;
      name: string;
      email: string;
    }[];
  }>;

  FindOne(data: { id: number }): Observable<{
    id: number;
    name: string;
    email: string;
  }>;

  Update(data: {
    id: number;
    name: string;
    email: string;
    password: string;
  }): Observable<{
    id: number;
    name: string;
    email: string;
  }>;

  Remove(data: { id: number }): Observable<{
    message: string;
  }>;
}
