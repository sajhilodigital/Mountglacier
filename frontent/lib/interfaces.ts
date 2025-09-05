// types/auth.d.ts
export interface User {
  id: string;
  fullName: string;
  role: string;
}

export interface LoginRequest {
  email: string;
  password: string;
  remember?: boolean;
}

export interface LoginResponse {
  success: boolean;
  message: string;
  user?: User;
  redirectTo?: string;
}
