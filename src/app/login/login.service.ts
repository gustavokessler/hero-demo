import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root"
})
export class LoginService {

  constructor() { }

  login(login: string, password: string): boolean {
    return login === "admin" && password === "admin" ? true : false;
  }
}
