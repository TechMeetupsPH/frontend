import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";

import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { MatIconModule } from "@angular/material/icon";
import { MatDialogModule } from "@angular/material/dialog";

import { HttpInterceptorsModule } from "./http-interceptors/http-interceptors.module";
import { SpinnerModule } from "./spinner-module/spinner.module";
import { AuthenticationModule } from "./authentication-module/entry.module";

import { ErrNotFoundComponent } from "./error-pages/err-not-found/err-not-found.component";
import { ErrUnauthorizedComponent } from "./error-pages/err-unauthorized/err-unauthorized.component";
import { NavbarComponent } from "./components/navbar/navbar.component";
import { FooterComponent } from "./components/footer/footer.component";

@NgModule({
  declarations: [
    ErrNotFoundComponent,
    ErrUnauthorizedComponent,
    NavbarComponent,
    FooterComponent
  ],
  imports: [
    /* 3rd party libraries */
    NgbModule,
    MatIconModule,
    CommonModule,
    RouterModule,
    HttpInterceptorsModule,
    SpinnerModule,
    AuthenticationModule
  ],
  exports: [SpinnerModule, NavbarComponent, FooterComponent]
})
export class CoreModule {}
