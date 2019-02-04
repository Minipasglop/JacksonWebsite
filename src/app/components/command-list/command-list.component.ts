import {Component, Input, OnInit} from '@angular/core';
import {BotCommand} from "../../models/botCommand.model";

@Component({
  selector: 'app-command-list',
  templateUrl: './command-list.component.html',
  styleUrls: ['./command-list.component.css']
})
export class CommandListComponent implements OnInit {


  @Input() commandList: BotCommand[];
  @Input() commandCategory: String;
  @Input() listIcon: String;

  constructor() { }

  ngOnInit() {
  }

  getListId(){
    var commandCategoryId = this.commandCategory.replace(" ","");
    return commandCategoryId + "List";
  }

}
