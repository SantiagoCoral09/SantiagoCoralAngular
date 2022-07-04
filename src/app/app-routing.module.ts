import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginpageComponent } from './Modules/auth/login-page/loginpage/loginpage.component';
import { RegisterComponent } from './Modules/auth/register/register.component';
import { ValidationsComponent } from './Modules/auth/validations/validations.component';
import { MarcadoresComponent } from './Modules/favoritos/marcadores/marcadores.component';
import { HistoryMenuComponent } from './Modules/history/history-menu/history-menu.component';
import { FooterComponent } from './Modules/home/footer/footer.component';
import { HeadersComponent } from './Modules/home/headers/headers.component';
import { TracklistComponent } from './Modules/track/tracklist/tracklist.component';
import { MycomponentComponent } from './mycomponent/mycomponent.component';

const routes: Routes = [
  // definir rutas
  {
    path:'',///localhost:4200/,
    component: MycomponentComponent
  },
  {
    path:'Autenticacion',///localhost:4200/Autenticacion,
    component: LoginpageComponent
  },
  {
    path:'Register',///localhost:4200/Register,
    component: RegisterComponent
  },
  {
    path:'Validations',///localhost:4200/Validations,
    component: ValidationsComponent
  },
  {
    path:'Home',///localhost:4200/Home,
    component: HeadersComponent
  },
  {
    path:'Footer',///localhost:4200/Footer,
    component: FooterComponent
  },
  {
    path:'tracklist',///localhost:4200/tracklist,
    component: TracklistComponent
  },
  {
    path:'History',///localhost:4200/History,
    component: HistoryMenuComponent
  },
  {
    path:'Favoritos',///localhost:4200/Favoritos,
    component: MarcadoresComponent
  },
  
  
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
