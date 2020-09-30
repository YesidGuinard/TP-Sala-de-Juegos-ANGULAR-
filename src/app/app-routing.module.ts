import {NgModule} from '@angular/core';
// importo del module principal
import {RouterModule} from '@angular/router';
import {JugadoresListadoComponent} from './components/sections/jugadores-listado/jugadores-listado.component';
import {PrincipalComponent} from './components/sections/principal/principal.component';
import {LoginComponent} from './components/sections/login/login.component';
import {QuienSoyComponent} from './components/sections/quien-soy/quien-soy.component';
import {RegistroComponent} from './components/sections/registro/registro.component';
import {ListadoComponent} from './components/sections/listado/listado.component';
import {AdivinaElNumeroComponent} from './components/games/adivina-el-numero/adivina-el-numero.component';
import {MenuCardComponent} from './components/component/menu-card/menu-card.component';
import {AdivinaMasListadoComponent} from './components/games/adivina-mas-listado/adivina-mas-listado.component';
import {AgilidadMasListadoComponent} from './components/games/agilidad-mas-listado/agilidad-mas-listado.component';
import {AgilidadAritmeticaComponent} from './components/games/agilidad-aritmetica/agilidad-aritmetica.component';
import {ErrorComponent} from './components/component/menu-card/error/error.component';



// declaro donde quiero que se dirija
const MiRuteo = [
  {path: 'Jugadores', component: JugadoresListadoComponent},
  {path: '', component: PrincipalComponent},
  {path: 'Login', component: LoginComponent},
  {path: 'QuienSoy', component: QuienSoyComponent},
  {path: 'Registro', component: RegistroComponent},
  {path: 'Principal', component: PrincipalComponent},
  {path: 'Listado', component: ListadoComponent},


  {
    path: 'Juegos',
    component: MenuCardComponent,
    children:
      [{path: '', component: MenuCardComponent},
        {path: 'Adivina', component: AdivinaElNumeroComponent},
        {path: 'AdivinaMasListado', component: AdivinaMasListadoComponent},
        {path: 'AgilidadaMasListado', component: AgilidadMasListadoComponent},
        {path: 'Agilidad', component: AgilidadAritmeticaComponent}]
  },
  {path: '**', component: ErrorComponent},
  {path: 'error', component: ErrorComponent}];

@NgModule({
  imports: [
    RouterModule.forRoot(MiRuteo)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {
}
