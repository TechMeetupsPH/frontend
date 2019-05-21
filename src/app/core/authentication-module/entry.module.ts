import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { EntryComponent } from "./components/entry/entry.component";
import { AuthenticationRouting } from "./entry.routing.module";

import { JwtModule } from "@auth0/angular-jwt";

export function tokenGetter() {
  return localStorage.getItem("access_token");
}

@NgModule({
  declarations: [EntryComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    AuthenticationRouting,
    JwtModule.forRoot({
      config: {
        tokenGetter: tokenGetter
        // whitelistedDomains: ["localhost:3000"],
        // blacklistedRoutes: ["localhost:3000/auth"]
      }
    })
  ],
  providers: []
})
export class AuthenticationModule {}
