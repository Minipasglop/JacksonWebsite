import {NgModule} from "@angular/core";
import {BodyComponent} from "./component/body/body.component";
import {SharedModule} from "../shared/shared.module";

@NgModule({
  declarations: [
    BodyComponent,
  ],
  imports: [SharedModule],
  exports: [BodyComponent]
})
export class HomePageModule {
}
