import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { LoginpageComponent } from './login-page/loginpage/loginpage.component';
import { RegisterComponent } from './register/register.component';
import { ValidationsComponent } from './validations/validations.component';


@NgModule({
  declarations: [
    LoginpageComponent,
    RegisterComponent,
    ValidationsComponent
  ],
  imports: [
    CommonModule,
    AuthRoutingModule
  ]
})
export class AuthModule { }
