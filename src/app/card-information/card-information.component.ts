import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-card-information',
  templateUrl: './card-information.component.html',
  styleUrls: ['./card-information.component.css']
})
export class CardInformationComponent implements OnInit {

  @Input() title:String;
  @Input() content:String;
  @Input() icon:String;
  @Input() iconPosition:String;
  constructor() { }

  isPositionRight() {
    return this.iconPosition == "right";
  }

  ngOnInit() {
  }

}
