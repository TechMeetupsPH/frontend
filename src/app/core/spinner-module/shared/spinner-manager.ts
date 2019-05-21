import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";
import { XHRStuckModel } from "./xhr-stack.model";

@Injectable()
export class SpinnerManager {
  xhrStuck: XHRStuckModel = new XHRStuckModel();
  sppinerActive: boolean = false;
  spinnerObservable: BehaviorSubject<any> = new BehaviorSubject<any>(false);

  /**
   * Activate\Deactivate the spinner
   * @param show if to show the spinner
   */
  show(show: boolean): void {
    if (!this.sppinerActive) {
      this.spinnerObservable.next(show);
    }
  }

  /**
   * Add XHR call to the spinner XHR's stuck
   * @param xhr
   */
  addXHR(xhr) {
    this.xhrStuck.push(xhr);
    this.show(true);
    this.setSpinnerActivation(true);
  }

  /**
   * Remove XHR call from the spinner stuck
   */
  removeXHR() {
    this.xhrStuck.pop();
    if (this.xhrStuck.isEmpty()) {
      this.setSpinnerActivation(false);
      this.show(false);
    }
  }

  /**
   * Set the spinner to active\deactive
   * @param activate if to activate the spinner
   */
  protected setSpinnerActivation(activate: boolean) {
    if (this.sppinerActive != activate) {
      this.sppinerActive = activate;
    }
  }

  /**
   * Force closing on the spinner
   */
  forceClose() {
    this.xhrStuck.cleanStuck();
    this.setSpinnerActivation(false);
    this.show(false);
  }
}
