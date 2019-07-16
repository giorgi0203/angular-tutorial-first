import { Injectable } from '@angular/core';
import { tap, finalize } from 'rxjs/operators';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpResponse,
  HttpErrorResponse
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { LoaderService } from './loader.service';

@Injectable()
export class Interceptor implements HttpInterceptor {
  constructor(
    private spinnerLoader: LoaderService
  ) { }
  // function which will be called for all http calls
  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    this.spinnerLoader.start();
    return next.handle(request).pipe(finalize(() => this.spinnerLoader.stop()));
  }
}
