import { MobileComponent } from './feautures/mobile/mobile.component';
import { DesktopComponent } from './feautures/desktop/desktop.component';
import { HomeComponent } from './feautures/home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
 {
  path: 'home',
  component: HomeComponent
 },
 {
  path: 'desktop',
  component: DesktopComponent
 },
 {
  path: 'mobile',
  component: MobileComponent
 },
 {
  path: '',
  redirectTo: 'home',
  pathMatch: 'full'
 }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
