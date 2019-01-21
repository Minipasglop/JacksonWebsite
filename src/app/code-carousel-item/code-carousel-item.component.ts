import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-code-carousel-item',
  templateUrl: './code-carousel-item.component.html',
  styleUrls: ['./code-carousel-item.component.css']
})
export class CodeCarouselItemComponent implements OnInit {

  @Input() title:String;
  @Input() content:String;
  @Input() link:String;
  @Input() alt:String;
  constructor() {
    console.log("penis")
  }

  ngOnInit() {
  }

}
