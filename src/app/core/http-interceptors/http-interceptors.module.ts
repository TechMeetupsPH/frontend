/**
 * Import here only Interceptors who need to be app wide
 *
 * if only your module needs it import it there
 * (make sure to arrange the interceptor in the correct order)
 */

import { NgModule } from "@angular/core";
import { HeadersInterceptor } from "./headers-interceptor";
import { SpinnerInterceptor } from "./spinner-interceptor";
import { NetworkErrorsInterceptor } from "./network-errors-interceptor";
import { HTTP_INTERCEPTORS } from "@angular/common/http";

@NgModule({
    providers: [
        { provide: HTTP_INTERCEPTORS, useClass: HeadersInterceptor, multi: true },
        { provide: HTTP_INTERCEPTORS, useClass: SpinnerInterceptor, multi: true },
        { provide: HTTP_INTERCEPTORS, useClass: NetworkErrorsInterceptor, multi: true }
    ]
})
export class HttpInterceptorsModule { }
