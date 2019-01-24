import {RouterModule, Routes} from "@angular/router";
import {NgModule} from "@angular/core";
import {BodyComponent} from "./body/body.component";
import {FeaturesComponent} from "./features/features.component";
import {FAQComponent} from "./faq/faq.component";

const routes: Routes = [
  {path: 'features', component: FeaturesComponent},
  {path: 'faq', component: FAQComponent},
  {path: '', component: BodyComponent}
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      scrollPositionRestoration: 'enabled', // Add options right here
    })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
