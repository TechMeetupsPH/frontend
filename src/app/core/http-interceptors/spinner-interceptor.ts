/**
 * Spinner Interceptor
 *
 * use it only for the spinner actions
 */

import { Injectable } from "@angular/core";
import {
  HttpInterceptor,
  HttpEvent,
  HttpHandler,
  HttpRequest,
  HttpResponse
} from "@angular/common/http";
import { Observable, throwError } from "rxjs";
import { tap } from "rxjs/operators";
import { catchError } from "rxjs/operators";
import { SpinnerManager } from "@core/spinner-module/shared/spinner-manager";

@Injectable()
export class SpinnerInterceptor implements HttpInterceptor {
  constructor(private spinnerManager: SpinnerManager) {}

  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    return next.handle(req).pipe(
      tap(event => {
        if (event instanceof HttpResponse) {
          if (event.status == 200 || 201) {
            this.spinnerManager.removeXHR();
          }
        } else {
          this.spinnerManager.addXHR(req);
        }
      }),
      catchError((err: any, obs: Observable<any>) => {
        this.spinnerManager.forceClose();
        return throwError(err);
      })
    );
  }
}
