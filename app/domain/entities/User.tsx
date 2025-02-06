import { RoleInterface } from "./Role";

export interface UserInterface {
    id?: number;
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
    password: string;
    confirmPassword: string;    
}   

export type UserLoginInterface = Pick<UserInterface, 'email' | 'password'>;

// export type UserLoginOptionalInterface = Omit<UserInterface, 'id' | 'firstName' | 'lastName' | 'phone' | 'repeatPassword'>;

export interface UserLogin extends UserInterface {
    token: string;
    roles: RoleInterface[]
}