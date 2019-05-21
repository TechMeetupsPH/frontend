import { ModuleWithProviders } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

const routes: Routes = [
  {
    path: "home",
    loadChildren: "../app/views/home/home.module#HomeModule"
  },
  {
    path: "",
    redirectTo: "/home",
    pathMatch: "full"
  },
  { path: "**", redirectTo: "/home", pathMatch: "full" },
  {
    // LazyLoading
    path: "entry",
    loadChildren:
      "../app/core/authentication-module/entry.module#AuthenticationModule"
  }
];

export const AppRoutingModule: ModuleWithProviders = RouterModule.forRoot(
  routes
);
