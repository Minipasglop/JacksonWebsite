import {NgModule} from "@angular/core";
import {FAQComponent} from "./component/faq/faq.component";
import {SharedModule} from "../shared/shared.module";

@NgModule({
  declarations: [
    FAQComponent
  ],
  imports: [SharedModule],
  exports: [FAQComponent]
})
export class FaqPageModule {
}
