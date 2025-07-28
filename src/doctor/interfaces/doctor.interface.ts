import { Observable } from 'rxjs';

export interface DoctorService {
  Create(data: {
    name: string;
    email: string;
    password: string;
    phoneNumber?: string;
    isCreator?: boolean;
  }): Observable<{
    id: number;
    name: string;
    email: string;
    phoneNumber?: string;
    isActive: boolean;
    isCreator: boolean;
  }>;

  SignIn(data: {
    email: string;
    password: string;
  }): Observable<{
    id: number;
    name: string;
    email: string;
    phoneNumber?: string;
    isActive: boolean;
    isCreator: boolean;
  }>;

  SignOut(data: {}): Observable<{
    message: string;
  }>;

  FindAll(data: {}): Observable<{
    doctors: {
      id: number;
      name: string;
      email: string;
      phoneNumber?: string;
      isActive: boolean;
      isCreator: boolean;
    }[];
  }>;

  FindOne(data: { id: number }): Observable<{
    id: number;
    name: string;
    email: string;
    phoneNumber?: string;
    isActive: boolean;
    isCreator: boolean;
  }>;

  Update(data: {
    id: number;
    name?: string;
    email?: string;
    phoneNumber?: string;
    isActive?: boolean;
    isCreator?: boolean;
  }): Observable<{
    id: number;
    name: string;
    email: string;
    phoneNumber?: string;
    isActive: boolean;
    isCreator: boolean;
  }>;

  Remove(data: { id: number }): Observable<{
    message: string;
  }>;
}
