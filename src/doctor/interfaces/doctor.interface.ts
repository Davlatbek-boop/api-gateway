import { Observable } from "rxjs";
import { LoginDoctorDto } from "../dto/login-doctor.dto";
import { Request, Response } from "express";

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

 SignIn(data: LoginDoctorDto): Observable<{
  accessToken: string;
  refreshToken: string;
  message: string;
}>;

  SignOut(req: Request, res: Response): Observable<{
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
