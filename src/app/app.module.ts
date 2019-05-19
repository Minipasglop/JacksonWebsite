import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {AppComponent} from './app.component';
import {NgbModule} from "@ng-bootstrap/ng-bootstrap";
import {AppRoutingModule} from "./app-routing.module";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {CommonModule, LocationStrategy, PathLocationStrategy} from "@angular/common";
import {CoreModule} from "./core/core.module";
import {HomePageModule} from "./homePage/homePage.module";
import {FeaturePageModule} from "./featurePage/featurePage.module";
import {FaqPageModule} from "./faqPage/faqPage.module";
import {SharedModule} from "./shared/shared.module";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    NgbModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    CoreModule,
    SharedModule,
    HomePageModule,
    FeaturePageModule,
    FaqPageModule,
  ],
  providers: [{provide: LocationStrategy, useClass: PathLocationStrategy}],
  bootstrap: [AppComponent]
})
export class AppModule { }
