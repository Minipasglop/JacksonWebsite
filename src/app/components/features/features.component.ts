import { Component, OnInit } from '@angular/core';
import {BotCommand} from "../../models/botCommand.model";
import {CommandsConstant} from "../../constants/commands.constant";

@Component({
  selector: 'app-features',
  templateUrl: './features.component.html',
  styleUrls: ['./features.component.css']
})
export class FeaturesComponent implements OnInit {

  private soundCommands: BotCommand[];
  private serverCommands: BotCommand[];
  private miscCommands: BotCommand[];

  constructor() { }

  ngOnInit() {
    this.soundCommands = CommandsConstant.SOUND_COMMANDS;
    this.serverCommands = CommandsConstant.SERVER_COMMANDS;
    this.miscCommands = CommandsConstant.MISC_COMMANDS;
  }

}
