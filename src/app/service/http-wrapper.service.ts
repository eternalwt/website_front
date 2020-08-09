import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { Observable, of } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class HttpWrapperService {

  constructor(
    private http: HttpClient, //http请求
    // private Jwt:SwJwtService,  //写入流量器服务
    private router: Router, //路由
  ) { }

  /**
   * 重新定义Get请求
   * @param url  路径地址
   * @param myheaders  额外的请求头
   */
  public Get(url: string, myheaders?: any): Observable<any> {
    return this.http.get(url,{headers:this.SetHeader()}).pipe(
      retry(0), //请求次数
      //tap(event=>this.showProgress(event)),
      catchError(this.handleError('')) //异常处理
    )
  }

  /**
   * 文件下载方法
   * @param url 请求路径
   * @param myheaders  headers的配置文件
   */
  public GetExport(url: string, myheaders?: any):Observable<any> {
    let headers = this.SetHeader(myheaders)
    return this.http.get(url,{ responseType: 'blob', observe: 'response', headers: headers }).pipe(
      retry(0), //请求次数
      //tap(event=>this.showProgress(event)),
      catchError(this.handleError('')) //异常处理
    )
  }
  /**
   * 重新定义Post请求
   * @param url  路径地址
   * @param options  请求的参数对象
   * @param myheaders 额外的请求头
   */
  public Post(url:string,options:any,myheaders?:any):Observable<any>{
    let headers = this.SetHeader(myheaders)
    return this.http.post(url,options,{headers:headers}).pipe(
      retry(0), //请求次数
      //tap(event=>this.showProgress(event)),
      catchError(this.handleError('')) //异常处理
    )
  }
  
  /**
   * 文件下来方法
   * @param url 路径地址
   * @param options  请求的参数对象
   * @param myheaders 额外的请求头
   */
  public PostExport(url:string,options:any,myheaders?:any):Observable<any>{
    let headers = this.SetHeader(myheaders)
    return this.http.post(url,options, { responseType: 'blob', observe: 'response', headers: headers }).pipe(
      retry(0), //请求次数
      //tap(event=>this.showProgress(event)),
      catchError(this.handleError('')) //异常处理
    )
  }
  


  /**
   * 异常处理 监听全局的浏览器错误
   * @param operation 
   * @param result  
   */
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      if(!error.error.code){
        switch (error.status)   //浏览器状态码
        {
          case 404: //登入异常
            // this.messageService.waring("请求服务失败")
            console.error(error.error.msg);
            break;
          case 400: //发生错误,客户端的问题
            // this.messageService.waring("错误的请求")
            console.error(error.error.msg);
            break;
          case 401: //发生错误,客户端的问题
            // this.messageService.waring("访问被拒绝")
            console.error(error.error.msg);
            break;
          case 500: //服务器错误
            // this.messageService.waring("内部服务器错误")
            console.error(error.error.msg);
            break;
          default:
              // this.messageService.waring("错误："+error.message) //提示框
            console.error(error.error.msg);
            break;
        }
        
        return;
      }
      switch (error.error.code)  //后台返回的状态码
      {
        case 310: //登入在别一个地方被登入 
          this.router.navigate(['login']); //退到登入
          // this.Jwt.clear(); //清空浏览器缓存
          // SwSimpleReuseStrategy.deleteAllRouteSnapshot(); //删掉所有路由复用
          // this.messageService.danger(error.error.msg)
          console.error(error.error.msg);
          break;
        case 404: //登入异常
          // this.messageService.waring("请求服务失败")
          console.error("请求服务失败");
          break;
        case 401: //登入异常
          this.router.navigate(['login']); //退到登入
          // this.Jwt.clear(); //清空浏览器缓存
          // this.messageService.danger(error.error.msg) //提示框
          // SwSimpleReuseStrategy.deleteAllRouteSnapshot(); //删掉所有路由复用
          break;
        case 500: //登入异常
          // this.messageService.waring(error.error.msg)
          console.error(error.error.msg);
          break;
          default:
            if(error.error.msg){
              // this.messageService.waring("错误："+error.error.msg) //提示框
              console.error("错误：" + error.error.msg);
            }else{
                  // this.messageService.waring("错误："+error.message) //提示框
              console.error("错误：" + error.error.msg);
            }
          break;
      }
      event.stopImmediatePropagation();

      return of(result as T);
    }
  }

    /**
     * 添加请求头 自带请求头
     * @ignore
     * @param myheaders  请求参数
     */
   SetHeader(myheaders?:any): HttpHeaders{
    let HeadersConfig = myheaders;
     if(HeadersConfig == null) {
      HeadersConfig = {
        'Content-Type' :'application/json',
        'Accept': 'application/json'
      }
     }

    //将登入令牌写入请求头
    /* if(this.Jwt.GetlocaToken("token")){
      HeadersConfig['Authorization']=`${this.Jwt.GetlocaToken('token')}`;
      HeadersConfig['token'] = this.Jwt.GetlocaToken('token');
      HeadersConfig['X-Auth-Token'] = this.Jwt.GetlocaToken('token');
    } */
    /* 将token 写入sessionStorage中 */
    // if(this.Jwt.getToken("token")){
    //   HeadersConfig['Authorization']=`${this.Jwt.getToken('token')}`;
    //   // HeadersConfig['token'] = this.Jwt.getToken('token');
    //   // HeadersConfig['X-Auth-Token'] = this.Jwt.getToken('token');
    // }
    return new HttpHeaders(HeadersConfig);
  }


  /**
   * 消息提示 请求成功后对数据的处理
   * @param event  
   */
  showProgress(event){
    if(event!=null){
      switch (event.code) 
      {
        case 200: //成功请求
          break;
        case 310: //登入在别一个地方被登入 
          if(event.msg=="注销成功"){
            return;
          }
          this.router.navigate(['login']); //退到登入
          // this.Jwt.clear(); //清空浏览器缓存
          // SwSimpleReuseStrategy.deleteAllRouteSnapshot(); //删掉所有路由复用
          // //this.messageService.DangerAlert(event.msg) //提示框
          break;
        // case 400: //登入异常
        //   this.router.navigate(['login']);
        //   this.Jwt.Clear();
        //   this.messageService.DangerAlert(event.msg)
        //   break;
        case 453: //校验失败
          break;
        default:
          //this.messageService.DangerAlert(event.msg)
          break;
      }
    }
  }

}
