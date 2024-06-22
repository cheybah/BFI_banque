import { Component } from '@angular/core';
import * as Stomp from 'stompjs';
import * as SockJS from 'sockjs-client';
import { PageTitleService } from 'src/app/services/PageTitleService';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent {
  title = 'WebSocketChatRoom';
  messages: { text: string; timestamp: Date; outgoing: boolean }[] = [];
  newmessage: string = '';
  private stompClient: Stomp.Client | null = null;

  constructor(private pageTitleService:PageTitleService) {}

  ngOnInit() {
    this.pageTitleService.changePageTitle('Messagerie');

    this.connect();
    
  }

  connect() {
    const socket = new SockJS('http://localhost:8080/testchat');
    this.stompClient = Stomp.over(socket);

    const _this = this;
    this.stompClient.connect({}, function (frame) {
      console.log('Connected: ' + frame);

      _this.stompClient!.subscribe('/start/initial', function (hello) {
        console.log(JSON.parse(hello.body));
        _this.showMessage(JSON.parse(hello.body), true);
      });
    });
  }

  sendMessage() {
    if (this.newmessage.trim() !== '') {
      this.stompClient!.send(
        '/current/resume',
        {},
        JSON.stringify(this.newmessage)
      );
      this.showMessage(this.newmessage, false);
      this.newmessage = '';
    }
  }

  showMessage(message: string, outgoing: boolean) {
    this.messages.push({ text: message, timestamp: new Date(), outgoing: outgoing });
  }
}
