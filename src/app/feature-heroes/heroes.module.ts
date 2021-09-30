import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DashboardComponent }   from '../dashboard/dashboard.component';
import { HeroesComponent }      from './heroes.component';
import { HeroDetailComponent }  from '../hero-detail/hero-detail.component';
import { CommonModule } from "@angular/common";


const routes: Routes = [
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
  { path: 'heroes', component: DashboardComponent },
  { path: 'heroesdash/detail/:id', component: HeroDetailComponent },
  { path: 'dashboard', component: HeroesComponent }
];

@NgModule({
  imports: [ CommonModule, RouterModule.forChild(routes) ],
  exports: [ RouterModule ],
  declarations: [
      HeroesComponent,
  ]
})
export class HeroesModule {}
