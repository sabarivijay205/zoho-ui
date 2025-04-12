import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ZHomeComponent } from './z-main/z-home/z-home.component';
import { ZSignInComponent } from './z-main/z-sign-in/z-sign-in.component';
import { ZSignUpComponent } from './z-main/z-sign-up/z-sign-up.component';

@NgModule({
  declarations: [
    AppComponent,
    ZHomeComponent,
    ZSignInComponent,
    ZSignUpComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
