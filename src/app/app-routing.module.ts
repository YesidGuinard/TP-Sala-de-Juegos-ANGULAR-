import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';

import {JugadoresListadoComponent} from './components/sections/jugadores-listado/jugadores-listado.component';
import {PrincipalComponent} from './components/sections/principal/principal.component';
import {LoginComponent} from './components/sections/login/login.component';
import {QuienSoyComponent} from './components/sections/quien-soy/quien-soy.component';
import {RegistroComponent} from './components/sections/registro/registro.component';

import {AdivinaElNumeroComponent} from './components/games/adivina-el-numero/adivina-el-numero.component';
import {JuegosComponent} from './components/sections/juegos/juegos.component';
import {AgilidadAritmeticaComponent} from './components/games/agilidad-aritmetica/agilidad-aritmetica.component';
import {ErrorComponent} from './components/component/error/error.component';

import {MenuJuegosComponent} from './components/sections/juegos/menu-juegos/menu-juegos.component';
import {AnagramaComponent} from './components/games/anagrama/anagrama.component';
import {PiedraComponent} from './components/games/piedra/piedra.component';
import {TatetiComponent} from './components/games/tateti/tateti.component';
import {SecuenciaComponent} from './components/games/secuencia/secuencia.component';
import {ListadoDeResultadosComponent} from './components/sections/listado-de-resultados/listado-de-resultados.component';
import {GuardService} from './services/guard.service';
import {MemoryComponent} from './components/games/memotest/memory.component';





const MiRuteo = [
  {path: 'Jugadores', component: JugadoresListadoComponent, canActivate: [GuardService]},
  {path: '', component: PrincipalComponent},
  {path: 'login', component: LoginComponent},
  {path: 'QuienSoy', component: QuienSoyComponent},
  {path: 'Registro', component: RegistroComponent},
  {path: 'Principal', component: PrincipalComponent},
  {path: 'Listado', component: ListadoDeResultadosComponent, canActivate: [GuardService]},
  {path: 'Juegos',   component: JuegosComponent,  canActivate: [GuardService],
    children:
      [ {path: '', component: MenuJuegosComponent},
        {path: 'Anagrama', component: AnagramaComponent},
        {path: 'Piedra', component: PiedraComponent},
        {path: 'Agilidad', component: AgilidadAritmeticaComponent},
        {path: 'Adivina', component: AdivinaElNumeroComponent},
        {path: 'Tateti', component: TatetiComponent},
        {path: 'Memotest', component: MemoryComponent},
        {path: 'Secuencia', component: SecuenciaComponent},
      ]
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
