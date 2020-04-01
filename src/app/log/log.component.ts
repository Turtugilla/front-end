import { Component, OnInit } from '@angular/core';
import { MessagesService } from '../messages.service';

@Component({
  selector: 'app-log',
  templateUrl: './log.component.html',
  styleUrls: ['./log.component.css']
})
export class LogComponent implements OnInit {

  myLogMessages: string[]
  constructor(public messagesServices: MessagesService) { }

  ngOnInit() {
    this.myLogMessages = this.messagesServices.messages

  }

}
