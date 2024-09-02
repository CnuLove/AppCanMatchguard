import { inject, NgModule } from '@angular/core';
import { Route, RouterModule, Routes, UrlSegment } from '@angular/router';
import { OneappComponent } from './oneapp/oneapp.component';
import { AppComponent } from './app.component';
import { TwoappComponent } from './twoapp/twoapp.component';
import { CustomrouteService } from './customroute.service';

const routes: Routes = [
  {
    path: "", component: AppComponent
  },
  {
    path: "one", component: OneappComponent,
    canMatch:[(route:Route,segment:UrlSegment[])=>{

      const permission=inject(CustomrouteService);

      return permission.routingPermision;
    }
  ]

  },
  {
    path:"two", component:TwoappComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
