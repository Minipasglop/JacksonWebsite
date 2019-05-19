import {NgModule} from "@angular/core";
import {FeaturesComponent} from "./component/features/features.component";
import {CommandItemComponent} from "./component/command-item/command-item.component";
import {CommandListComponent} from "./component/command-list/command-list.component";
import {SharedModule} from "../shared/shared.module";


@NgModule({
  declarations: [
    FeaturesComponent,
    CommandItemComponent,
    CommandListComponent
  ],
  imports: [SharedModule],
  exports: [FeaturesComponent]
})
export class FeaturePageModule {
}
