import {Component, Input, OnInit} from '@angular/core';
import {BotCommand} from "../../models/botCommand.model";

@Component({
  selector: 'app-command-item',
  templateUrl: './command-item.component.html',
  styleUrls: ['./command-item.component.css']
})
export class CommandItemComponent implements OnInit {

  @Input() command: BotCommand;

  constructor() { }

  ngOnInit() {
  }

}
