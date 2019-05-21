import { ModuleWithProviders } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { EntryComponent } from "./components/entry/entry.component";
import { ErrUnauthorizedComponent } from "@core/error-pages/err-unauthorized/err-unauthorized.component";
import { ErrNotFoundComponent } from "@core/error-pages/err-not-found/err-not-found.component";

const routes: Routes = [
  {
    path: "entry",
    component: EntryComponent
  },
  // Errors
  {
    path: "404",
    component: ErrNotFoundComponent
  },
  {
    path: "401",
    component: ErrUnauthorizedComponent
  }
];

export const AuthenticationRouting: ModuleWithProviders = RouterModule.forChild(
  routes
);
