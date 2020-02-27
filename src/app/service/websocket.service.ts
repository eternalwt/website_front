import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class WebsocketService {

  constructor() { }

  baseUrl = "ws://localhost:8080/websocket/";// todo 放入environment里面去

  createWebSocket(type) {
    let socket = new WebSocket(this.baseUrl + type);

    // 打开事件
    socket.onopen = function() {
      debugger;
      console.log("Socket 已打开");
      //socket.send("这是来自客户端的消息" + location.href + new Date());
    };

    // todo 统一消息解析、多路复用：userId、businessType、msgType、msgBody
    // 接收消息事件
    socket.onmessage = function(msg) {
      debugger;
      console.log(msg.data);
    };

    // 关闭事件
    socket.onclose = function() {
      console.log("Socket已关闭");
    };

    // 发生了错误事件
    socket.onerror = function() {
        alert("Socket发生了错误");
        // 自动重新连接【后端加异常处理机制防止消息丢失】
    }

    return socket;
  }

   

}
