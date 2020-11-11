import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EmptyRouteComponent } from './empty-route/empty-route.component';
import { APP_BASE_HREF } from '@angular/common';
import { CatalogComponent } from './catalog/catalog.component';
import { HomeComponent } from './home/home.component';


const routes: Routes = [
  { path: 'app1/catalog', component: CatalogComponent },
  { path: 'app1/home', component: HomeComponent },
  { path: '**', component: EmptyRouteComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [
    { provide: APP_BASE_HREF, useValue: '/' },
  ],
})
export class AppRoutingModule { }
