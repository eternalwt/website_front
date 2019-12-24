import { Injectable } from '@angular/core';
// import * as Rx from "rxjs/Rx";

@Injectable({
  providedIn: 'root'
})
export class WebsocketService {

  constructor() { }

  // private subject: Rx.Subject<MessageEvent>;

  // public connect(url): Rx.Subject<MessageEvent> {
  //   if (!this.subject) {
  //     this.subject = this.create(url);
  //     console.log("Successfully connected: " + url);
  //   }
  //   return this.subject;
  // }

  // private create(url): Rx.Subject<MessageEvent> {
  //   let ws = new WebSocket(url);

  //   let observable = Rx.Observable.create((obs: Rx.Observer<MessageEvent>) => {
  //     ws.onmessage = obs.next.bind(obs);
  //     ws.onerror = obs.error.bind(obs);
  //     ws.onclose = obs.complete.bind(obs);
  //     return ws.close.bind(ws);
  //   });
  //   let observer = {
  //     next: (data: Object) => {
  //       if (ws.readyState === WebSocket.OPEN) {
  //         ws.send(JSON.stringify(data));
  //       }
  //     }
  //   };
  //   return Rx.Subject.create(observer, observable);
  // }

  baseUrl = "ws://localhost:8080/websocket/";

  createWebSocket(type) {
    let socket = new WebSocket(this.baseUrl + type);

    // 打开事件
    socket.onopen = function() {
      debugger;
      console.log("Socket 已打开");
      //socket.send("这是来自客户端的消息" + location.href + new Date());
    };

    // 获得消息事件
    socket.onmessage = function(msg) {
      debugger;
      console.log(msg.data);
      //发现消息进入    开始处理前端触发逻辑
    };

    //关闭事件
    socket.onclose = function() {
      console.log("Socket已关闭");
    };
    //发生了错误事件
    socket.onerror = function() {
        alert("Socket发生了错误");
        //此时可以尝试刷新页面
    }

    return socket;
  }

   

}
