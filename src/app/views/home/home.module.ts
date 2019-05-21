import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { HomeComponent } from "./home.component";
import { HomeRoutingModule } from "./home.routing.module";
import { UsersComponent } from "../home/components/users/users.component";
import { ChatComponent } from "../home/components/chat/chat.component";
import { DesignPatternsComponent } from "./components/design-patterns/design-patterns.component";

import { FormsModule } from "@angular/forms";
import { MatIconModule } from "@angular/material";

import { AgmCoreModule, GoogleMapsAPIWrapper } from "@agm/core";
import { PlacesComponent } from "./components/places/places.component";
import { GooglePlacesDirective } from "./components/places/directives/google-places.directive";
import { MatDialogModule } from "@angular/material/dialog";

const moduleComponets = [
  HomeComponent,
  UsersComponent,
  ChatComponent,
  PlacesComponent,
  DesignPatternsComponent
];
@NgModule({
  declarations: [moduleComponets, GooglePlacesDirective],
  imports: [
    CommonModule,
    HomeRoutingModule,
    FormsModule,
    MatIconModule,
    AgmCoreModule.forRoot({
      apiKey: "AIzaSyCpLcmQRcOyou9cMK85bKNbCaszYawR4uA"
    }),
    MatDialogModule
  ],
  providers: [GoogleMapsAPIWrapper]
})
export class HomeModule {}
