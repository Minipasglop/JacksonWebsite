import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbdCarouselConfig} from "./components/carousel-config/carousel-config.component";
import { AppComponent } from './app.component';
import { NavComponent } from './components/nav/nav.component';
import { FooterComponent } from './components/footer/footer.component';
import { BodyComponent } from './components/body/body.component';
import { NgbModule} from "@ng-bootstrap/ng-bootstrap";
import { ButtonListComponent } from './components/button-list/button-list.component';
import { CodeCarouselItemComponent } from './components/code-carousel-item/code-carousel-item.component';
import { CardInformationComponent } from './components/card-information/card-information.component';
import { AppRoutingModule } from "./app-routing.module";
import { FeaturesComponent } from './components/features/features.component';
import { FAQComponent } from './components/faq/faq.component';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import { CommandListComponent } from './components/command-list/command-list.component';
import { CommandItemComponent } from './components/command-item/command-item.component';
import {LocationStrategy, PathLocationStrategy} from "@angular/common";

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    FooterComponent,
    BodyComponent,
    NgbdCarouselConfig,
    ButtonListComponent,
    CodeCarouselItemComponent,
    CardInformationComponent,
    FeaturesComponent,
    FAQComponent,
    CommandListComponent,
    CommandItemComponent
  ],
  imports: [
    BrowserModule,
    NgbModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [{provide: LocationStrategy, useClass: PathLocationStrategy}],
  bootstrap: [AppComponent]
})
export class AppModule { }
