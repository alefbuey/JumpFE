import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Observable } from 'rxjs';
import * as moment from 'moment';
import { Chat, MessageType } from '../../models/chat';

/**
 * Generated class for the ChatPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-chat',
  templateUrl: 'chat.html',
})
export class ChatPage {
  chats: Observable<Chat[]>;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.chats = this.findChats();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ChatPage');
  }
  private findChats(): Observable<Chat[]> {
    return Observable.of([
      {
        _id: '0',
        title: 'Fernanda Zapata',
        picture: 'http://localhost:3000/uploads/profiles/foto1.jpg',
        lastMessage: {
          createdAt: moment().subtract(1, 'hours').toDate(),
          type: MessageType.TEXT
        }
      },
      {
        _id: '1',
        title: 'Camilo Guitierrez',
        picture: 'http://localhost:3000/uploads/profiles/foto2.jpg',
        lastMessage: {
          createdAt: moment().subtract(2, 'hours').toDate(),
          type: MessageType.TEXT
        }
      },
      {
        _id: '2',
        title: 'Laura Rivera',
        picture: 'http://localhost:3000/uploads/profiles/foto3.jpg',
        lastMessage: {
          createdAt: moment().subtract(1, 'days').toDate(),
          type: MessageType.TEXT
        }
      },
      {
        _id: '3',
        title: 'Enrique Rivera',
        picture: 'http://localhost:3000/uploads/profiles/foto4.jpg',
        lastMessage: {
          createdAt: moment().subtract(4, 'days').toDate(),
          type: MessageType.TEXT
        }
      },
      {
        _id: '4',
        title: 'Jaime Alban',
        picture: 'http://localhost:3000/uploads/profiles/foto5.jpg',
        lastMessage: {
          createdAt: moment().subtract(2, 'weeks').toDate(),
          type: MessageType.TEXT
        }
      }
    ]);
  }

  removeChat(chat: Chat): void {
    this.chats = this.chats.map((chatsArray: Chat[]) => {
      const chatIndex = chatsArray.indexOf(chat);
      if (chatIndex !== -1) {
        chatsArray.splice(chatIndex, 1);
      }
 
      return chatsArray;
    });
  }
}
