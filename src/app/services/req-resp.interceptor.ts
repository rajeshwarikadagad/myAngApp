import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpHeaders
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class ReqRespInterceptor implements HttpInterceptor {

  constructor() {}

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
   
    request = request.clone({headers: new HttpHeaders() .set('content-type', 'application/json').set('Access-Control-Allow-Origin', '*')});
  console.log(request);
    return next.handle(request);
  }
}
