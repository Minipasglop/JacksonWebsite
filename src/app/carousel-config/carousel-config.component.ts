import { Component } from '@angular/core';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'ngbd-carousel-config',
  templateUrl: 'carousel-config.component.html',
  providers: [NgbCarouselConfig]  // add NgbCarouselConfig to the component providers
})
export class NgbdCarouselConfig {

  images = [{
    title:"Jackson",
    alt:"Some Code",
    link:"../../assets/img/commandEnumLittle.png",
    content:"The music bot you've dreamed of for so long..."
  },{
    title:"Jackson",
    alt:"Some Code",
    link:"../../assets/img/commandEnumLittle.png",
    content:"Music, Server management, and much more !"
  }
  ];

  constructor(config: NgbCarouselConfig) {
    // customize default values of carousels used by this component tree
    config.interval = 10000;
    config.wrap = true;
    config.keyboard = false;
    config.pauseOnHover = false;
    config.showNavigationArrows = false;
    config.showNavigationIndicators = false;
  }
}
