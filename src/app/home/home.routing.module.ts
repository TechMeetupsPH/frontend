import { ModuleWithProviders } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { HomeComponent } from "./home.component";
import { UsersComponent } from "../home/components/users/users.component";
import { AuthGuard } from "@core/guards/auth.guard";
import { ChatComponent } from "../home/components/chat/chat.component";
import { PlacesComponent } from "./components/places/places.component";
import { DesignPatternsComponent } from "./components/design-patterns/design-patterns.component";

const routes: Routes = [
  {
    path: "home",
    component: HomeComponent,
    canActivate: [AuthGuard]
  },

  {
    path: "users",
    component: UsersComponent,
    canActivate: [AuthGuard]
  },

  {
    path: "chat",
    component: ChatComponent,
    canActivate: [AuthGuard]
  },
  {
    path: "places",
    component: PlacesComponent,
    canActivate: [AuthGuard]
  },
  {
    path: "patterns",
    component: DesignPatternsComponent,
    canActivate: [AuthGuard]
  }
];

export const HomeRoutingModule: ModuleWithProviders = RouterModule.forChild(
  routes
);
