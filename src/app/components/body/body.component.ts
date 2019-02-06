import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})
export class BodyComponent implements OnInit {

  cardItems = [
    {
      title:"Music",
      icon:"fa fa-volume-up",
      content:"You can play any song from YouTube using JacksonBot. It can handle a playlist, with track shuffling, skipping and looping." +
        " You also have access to basic controls like pause the current track being played or adjust the bot's volume. You want anything more ? Just join the support server by clicking the button above and mind telling me in the #suggestions channel.",
      iconPosition: "left"
    },
    {
      title:"Server Management",
      icon:"fa fa-wrench",
      content:"JacksonBot provides you some great tools to manage your Discord server. In fact, you can customize his prefix, delete some text messages. You also have access to some basic controls like ban, mute, kick from server." +
        " And best of all, you can set a custom role that will be set to any newcomer of your server. Pretty cool uh ?",
      iconPosition: "right"
    },
    {
      title:"Technology",
      icon:"fa fa-plug",
      content:"JacksonBot is entierely coded under Java 8, using the JDA library on version 3.5. It is made strongly with a good environment to allow him being online 24/7 with his very own dedicated server." +
        " As it is fully open-source, you can see the code on my GitHub.",
      iconPosition: "left"
    },
    {
      title:"Community",
      icon:"fa fa-users",
      content:"You need some help using the bot ? Or setting up the permissions for JacksonBot ? You just want to make some friends, or help me with some ass kicking ideas ? Just click the button above and join JacksonBot's support server!",
      iconPosition: "right"
    },
    ];

  constructor() { }

  ngOnInit() {
  }

}
