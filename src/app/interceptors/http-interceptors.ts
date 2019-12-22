import { Injectable } from "@angular/core";
import {
  HttpInterceptor,
  HttpRequest,
  HttpHandler,
//   HttpErrorResponse,
//   HttpHeaderResponse,
  HttpResponse,
  HttpEvent
} from "@angular/common/http";
import { Observable } from "rxjs";
import { finalize, tap } from "rxjs/operators";
import { StorageService } from '../service/storage.service';
 
/** Pass untouched request through to the next request handler. */
@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  constructor(
    private storageService: StorageService,
  ) {}
 
  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    const authToken = this.storageService.getAuthorizationToken();
 
    const authReq = req.clone({
      headers: req.headers.set("x-auth-token", authToken),
    //   url: req.url.replace(req.url, this.httpService.reqUrl + req.url)
    });
 
    return next.handle(authReq).pipe(
      tap(
        event => {
          if (event instanceof HttpResponse) {
            debugger;
            console.log(event);
            console.log("intercept success");
            if (event.headers) {
                // todo 保存/刷新token
            }
          }
        },
        error => {
          console.log("failed");
        }
      ),
      finalize(() => {//请求完成（成功或失败都执行）
        //this.loadingService.loading(false);
      })
    );
  }
}