import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class WebsocketService {

  constructor() { }

  wsBaseUrl = environment.wsBaseUrl;

  createWebSocket(businessType) {
    let socket = new WebSocket(this.wsBaseUrl + businessType);

    // 打开事件
    socket.onopen = function() {
      debugger;
      // socket.addEventListener 怎么用？
      // socket.dispatchEvent 怎么用？
      console.log("Socket 已打开");
      //socket.send("这是来自客户端的消息" + location.href + new Date());
    };

    // todo 统一消息解析、多路复用：userId（便于数据库的一些操作）、businessType、msgType、msgBody
    // 接收消息事件
    socket.onmessage = function(msg) {
      debugger;
      console.log(msg.data);
    };

    // 关闭事件
    socket.onclose = function() {
      // todo 确认关闭时机
      console.log("Socket已关闭");
    };

    // 发生了错误事件
    socket.onerror = function() {
        alert("Socket发生了错误");
        // todo 自动重新连接【1.后端加异常处理机制防止消息丢失；2.是不是用stomp更好重发？确认已发了多少包更方便？】
    }

    return socket;
  }

   

}
