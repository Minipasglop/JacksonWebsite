import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbdCarouselConfig} from "./carousel-config/carousel-config.component";
import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { FooterComponent } from './footer/footer.component';
import { BodyComponent } from './body/body.component';
import { NgbModule} from "@ng-bootstrap/ng-bootstrap";
import { ButtonListComponent } from './button-list/button-list.component';
import { CodeCarouselItemComponent } from './code-carousel-item/code-carousel-item.component';
import { CardInformationComponent } from './card-information/card-information.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    FooterComponent,
    BodyComponent,
    NgbdCarouselConfig,
    ButtonListComponent,
    CodeCarouselItemComponent,
    CardInformationComponent
  ],
  imports: [
    BrowserModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
