import {NgModule} from "@angular/core";
import {CoreModule} from "../core/core.module";
import {CommonModule} from "@angular/common";
import {NgbModule} from "@ng-bootstrap/ng-bootstrap";

@NgModule({

  imports: [CoreModule, CommonModule, NgbModule],
  exports: [CoreModule, CommonModule, NgbModule]
})
export class SharedModule {
}
