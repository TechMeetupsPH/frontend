import { Component, OnInit } from "@angular/core";
import {
  FormGroup,
  FormBuilder,
  Validators,
  FormControl
} from "@angular/forms";
import { Router } from "@angular/router";
import * as constants from "@core/shared/globals/global-constants";
import { AuthService } from "@core/authentication-module/services/auth.service";
import { UserModel } from "@core/authentication-module/models/user.model";

@Component({
  selector: "app-sign-up",
  templateUrl: "./entry.component.html",
  styleUrls: ["./entry.component.scss"]
})
export class EntryComponent implements OnInit {
  public signUpForm: FormGroup;
  public errMsg: string = "";
  public successMsg: string = "";
  public isAuthenticated: boolean = false;
  public isLoginMode: boolean = true;

  constructor(
    private formBuilder: FormBuilder,
    private entryService: AuthService,
    private router: Router
  ) {
    this.initForm();
  }

  initForm(): void {
    this.signUpForm = this.formBuilder.group({
      email: new FormControl(
        "",
        Validators.compose([
          Validators.required,
          Validators.pattern(constants.emailRegEx)
        ])
      ),
      password: ["", [Validators.required, Validators.minLength(6)]],
      remember: true
    });
  }

  logIn(formData): void {
    const newUser: UserModel = {
      email: formData.email,
      password: formData.password
    };
    this.entryService.auth(newUser).subscribe(res => {
      if (res.token) {
        this.successLogin();
      } else {
        this.errMsg = res.error;
      }
    });
  }

  signUp(formData): void {
    const newUser: UserModel = {
      email: formData.email,
      password: formData.password
    };
    this.entryService.register(newUser).subscribe(res => {
      if (res.error) {
        this.errMsg = res.error;
      } else {
        this.successMsg = res;
      }
    });
  }

  toggleMode(): void {
    this.isLoginMode = !this.isLoginMode;
    this.signUpForm.reset();
    this.errMsg = "";
  }

  successLogin(): void {
    this.isAuthenticated = !this.isAuthenticated;
    this.errMsg = "";
    // simulate animation
    const navigate = () => this.router.navigateByUrl("home");
    setTimeout(navigate, 800);
  }

  ngOnInit() {}
}
