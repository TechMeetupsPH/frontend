import { LoginComponent } from './login/login.component';
import { AuthGuard } from './auth.guard';
import { ModuleWithProviders } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

const routes: Routes = [
  {
    path: "/",
    pathMatch: "full",
    component: Home
  },
  { path: 'login',
    component:
     LoginComponent},

];

export const AppRoutingModule: ModuleWithProviders = RouterModule.forRoot(
  routes
);
