import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ZhomeComponent } from './zMain/zhome/zhome.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ZLoginComponent } from './zMain/z-login/z-login.component';
import { ZRegisterComponent } from './zMain/z-register/z-register.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    AppComponent,
    ZhomeComponent,
    ZLoginComponent,
    ZRegisterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
