import { Component, OnInit } from "@angular/core";
import { HeroService } from "../hero/hero.service";
import { Router } from "@angular/router";
import { LoginService } from './login.service';

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.scss"]
})
export class LoginComponent implements OnInit {

  login: string;
  password: string;


  constructor(
    private loginService: LoginService,
    private router: Router
  ) { }

  ngOnInit() {
  }

  submit(): void {
    console.log(this.login);
    console.log(this.password);
    if (this.loginService.login(this.login, this.password)) {
      this.router.navigate(["heroes"]);
    } else {
      alert("Usuário ou Senha Inválida");
    }
  }


}
