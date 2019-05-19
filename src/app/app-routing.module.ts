import {RouterModule, Routes} from "@angular/router";
import {NgModule} from "@angular/core";
import {BodyComponent} from "./homePage/component/body/body.component";
import {FeaturesComponent} from "./featurePage/component/features/features.component";
import {FAQComponent} from "./faqPage/component/faq/faq.component";

const routes: Routes = [
  {path: 'features', component: FeaturesComponent, data:{animation: 'featuresPage'}},
  {path: 'faq', component: FAQComponent, data:{animation: 'faqPage'}},
  {path: 'home', component: BodyComponent, data:{animation: 'homePage'}},
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: '**', redirectTo :'home', pathMatch: 'full'}

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
