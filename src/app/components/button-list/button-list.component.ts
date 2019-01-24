import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-button-list',
  templateUrl: './button-list.component.html',
  styleUrls: ['./button-list.component.css']
})
export class ButtonListComponent implements OnInit {

  constructor() { }

  addBot(){
    window.location.assign("https://discordapp.com/oauth2/authorize?client_id=457256267069784102&scope=bot&permissions=-1");
  }

  joinCommunityServer(){
    window.location.assign("https://discord.gg/MUaWKcu");
  }

  ngOnInit() {
  }

}
