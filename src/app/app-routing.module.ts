import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ZHomeComponent } from './z-main/z-home/z-home.component';
import { ZSignInComponent } from './z-main/z-sign-in/z-sign-in.component';
import { ZSignUpComponent } from './z-main/z-sign-up/z-sign-up.component';

const routes: Routes = [
  {path: '', redirectTo: 'z-home', pathMatch: 'full'},
  {path: 'z-home', component: ZHomeComponent},
  {path: 'signIn', component: ZSignInComponent},
  {path: 'signUp', component: ZSignUpComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
