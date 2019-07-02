import { Component, OnInit, NgZone } from "@angular/core";

@Component({
  selector: "app-places",
  templateUrl: "./places.component.html",
  styleUrls: ["./places.component.scss"]
})
export class PlacesComponent implements OnInit {
  public addrKeys: string[];
  public addr: object;
  lat: number = 32.1624;
  lng: number = 34.8447;

  constructor(private zone: NgZone) {}

  //Method to be invoked everytime we receive a new instance
  //of the address object from the onSelect event emitter.
  setAddress(addrObj) {
    //We are wrapping this in a NgZone to reflect the changes
    //to the object in the DOM.
    this.zone.run(() => {
      this.addr = addrObj;
      this.addrKeys = Object.keys(addrObj);
      this.lat = addrObj.coordinates.latitude;
      this.lng = addrObj.coordinates.longitude;
    });
  }

  ngOnInit() {}
}
