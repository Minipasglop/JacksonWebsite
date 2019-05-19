import {NgModule} from "@angular/core";
import {NavComponent} from "./components/nav/nav.component";
import {FooterComponent} from "./components/footer/footer.component";
import {NgbdCarouselConfig} from "./components/carousel-config/carousel-config.component";
import {ButtonListComponent} from "./components/button-list/button-list.component";
import {CodeCarouselItemComponent} from "./components/code-carousel-item/code-carousel-item.component";
import {CommonModule} from "@angular/common";
import {NgbModule} from "@ng-bootstrap/ng-bootstrap";
import {CardInformationComponent} from "./components/card-information/card-information.component";
import {AppRoutingModule} from "../app-routing.module";


@NgModule({
  declarations: [
    NavComponent,
    FooterComponent,
    CodeCarouselItemComponent,
    NgbdCarouselConfig,
    ButtonListComponent,
    CardInformationComponent
  ],
  exports: [
    NavComponent,
    FooterComponent,
    NgbdCarouselConfig,
    ButtonListComponent,
    CodeCarouselItemComponent,
    CardInformationComponent
  ],
  imports: [
    CommonModule,
    NgbModule,
    AppRoutingModule
  ]
})
export class CoreModule {
}
