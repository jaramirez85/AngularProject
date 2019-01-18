import {Action} from '@ngrx/store';
import { ILogin } from '../models/interfaces/auth';
import {User} from 'firebase';

export enum AuthActionTypes {
    Login = '[Auth] Send Login',
    LoginSuccessful= '[Auth] Login Successful',
    LoginError = '[Auth] Login Error'
}

export class Login  implements Action {
    readonly type = AuthActionTypes.Login;

    constructor(public payload: ILogin) {

    }
}

export class LoginSuccessful implements Action {
    readonly type: AuthActionTypes.LoginSuccessful;

    constructor(public payload: User) {}

}

export class LoginError implements Action {
    readonly type: AuthActionTypes.LoginError;

    constructor(public payload: any) {}

}

//exportar acciones como tipos
export type AuthActions =
| Login
| LoginSuccessful
| LoginError;
