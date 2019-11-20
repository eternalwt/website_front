import { Component, OnInit } from '@angular/core';
import * as Stomp from '@stomp/stompjs';
import * as SockJS from 'sockjs-client';
import { WebsocketService } from 'src/app/service/websocket.service';


@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.less']
})
export class AboutComponent implements OnInit {
  title = 'grokonez';
  description = 'Angular-WebSocket Demo';
 
  greetings: string[] = [];
  disabled = true;
  name: string;
  private stompClient = null;

  constructor(
    private webSocketService: WebsocketService
  ) { }

  ngOnInit() {
    //this.connect();

    let socket = this.webSocketService.createWebSocket(1);
    socket.onmessage = function(msg) {
      console.log(msg);
      debugger;
    }
  }

  // setConnected(connected: boolean) {
  //   this.disabled = !connected;
 
  //   if (connected) {
  //     this.greetings = [];
  //   }
  // }
 
  // connect() {
  //   const socket = new SockJS('http://localhost:8080/website-websocket');
  //   //this.stompClient = Stomp.Client;
  //   this.stompClient = Stomp.Stomp.over(socket);
  //   debugger;
  //   const _this = this;
  //   this.stompClient.connect({}, function (frame) {
  //     _this.setConnected(true);
  //     console.log('Connected: ' + frame);
 
  //     _this.stompClient.subscribe('/topic/hi', function (hello) {
  //       _this.showGreeting(JSON.parse(hello.body).greeting);
  //     });
  //   });
  // }
 
  // disconnect() {
  //   if (this.stompClient != null) {
  //     this.stompClient.disconnect();
  //   }
 
  //   this.setConnected(false);
  //   console.log('Disconnected!');
  // }
 
  // sendName() {
  //   this.stompClient.send(
  //     '/gkz/hello',
  //     {},
  //     JSON.stringify({ 'name': this.name })
  //   );
  // }
 
  // showGreeting(message) {
  //   this.greetings.push(message);
  // }

}
