import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginpageComponent } from './Modules/auth/login-page/loginpage/loginpage.component';
import { MycomponentComponent } from './mycomponent/mycomponent.component';

const routes: Routes = [
  // definir rutas
  {
    path:'',///localhost:4200/,
    component: MycomponentComponent
  },
  {
    path:'Autenticacion',///localhost:4200/,
    component: LoginpageComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
