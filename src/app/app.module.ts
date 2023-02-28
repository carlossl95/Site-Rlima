import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MobileComponent } from './feautures/mobile/mobile.component';
import { DesktopComponent } from './feautures/desktop/desktop.component';
import { HomeComponent } from './feautures/home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    MobileComponent,
    DesktopComponent,
    HomeComponent, ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
