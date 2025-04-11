import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ZhomeComponent } from './zMain/zhome/zhome.component';

const routes: Routes = [
  {path: '', redirectTo: 'zHome', pathMatch: 'full'},
  {path: 'zHome', component: ZhomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
