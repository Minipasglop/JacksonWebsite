import {RouterModule, Routes} from "@angular/router";
import {NgModule} from "@angular/core";
import {BodyComponent} from "./body/body.component";

const routes: Routes = [
  {
    path: '**',
    component: BodyComponent
  }
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
