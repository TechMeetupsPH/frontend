import { Injectable, ErrorHandler } from "@angular/core";
import {
  HttpInterceptor,
  HttpEvent,
  HttpHandler,
  HttpRequest
} from "@angular/common/http";
import { Router } from "@angular/router";
import { Observable, throwError } from "rxjs";
import { catchError } from "rxjs/operators";

@Injectable()
export class NetworkErrorsInterceptor implements HttpInterceptor {
  constructor(private errorHandler: ErrorHandler, private router: Router) {}

  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    return next.handle(req).pipe(
      catchError((err: any, obs: Observable<any>) => {
        if (err.status == 401) {
          this.router.navigateByUrl("401");
        } else {
          this.router.navigateByUrl("404");
        }
        return throwError(err);
      })
    );
  }
}
