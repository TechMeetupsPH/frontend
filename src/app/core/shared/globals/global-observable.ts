import { Injectable } from "@angular/core";
import { Subject } from "rxjs";

@Injectable({
  providedIn: "root"
})
export class GlobalObservableService {
  authenticationObservable = new Subject<boolean>();
  userStackObservable = new Subject<any>();
  isUserTyping = new Subject<any>();
}
