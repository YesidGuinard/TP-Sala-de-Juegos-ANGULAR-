import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {AppComponent} from './app.component';
import {AdivinaElNumeroComponent} from './components/games/adivina-el-numero/adivina-el-numero.component';
import {ListadoDeResultadosComponent} from './components/sections/listado-de-resultados/listado-de-resultados.component';
import {LoginComponent} from './components/sections/login/login.component';
import {HttpModule} from '@angular/http';


import {ErrorComponent} from './components/component/menu-card/error/error.component';
import {PrincipalComponent} from './components/sections/principal/principal.component';
import {AgilidadAritmeticaComponent} from './components/games/agilidad-aritmetica/agilidad-aritmetica.component';
import {MenuComponent} from './components/component/menu/menu.component';
import {AdivinaMasListadoComponent} from './components/games/adivina-mas-listado/adivina-mas-listado.component';
import {AgilidadMasListadoComponent} from './components/games/agilidad-mas-listado/agilidad-mas-listado.component';

import {ListadoComponent} from './components/sections/listado/listado.component';
import {JugadoresListadoComponent} from './components/sections/jugadores-listado/jugadores-listado.component';

import {ListadosComponent} from './components/component/listados/listados.component';
import {JuegosComponent} from './components/sections/juegos/juegos.component';
import {RegistroComponent} from './components/sections/registro/registro.component';
import {MenuCardComponent} from './components/component/menu-card/menu-card.component';
import {CabeceraComponent} from './components/component/cabecera/cabecera.component';
import {QuienSoyComponent} from './components/sections/quien-soy/quien-soy.component';
import {AnagramaComponent} from './components/games/anagrama/anagrama.component';

import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatTableModule} from '@angular/material/table';
import {MatMenuModule} from '@angular/material/menu';
import {MatCardModule} from '@angular/material/card';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import {MatButtonToggleModule} from '@angular/material/button-toggle';
import {AppRoutingModule} from './app-routing.module';
import {MatDividerModule} from '@angular/material/divider';
import {MatListModule} from '@angular/material/list';
import {AngularFireModule} from '@angular/fire';
import {AngularFireAuthModule} from '@angular/fire/auth';
import {environment} from '../environments/environment';


@NgModule({
  declarations: [
    AppComponent,
    AdivinaElNumeroComponent,
    ListadoDeResultadosComponent,
    ErrorComponent,
    PrincipalComponent,
    LoginComponent,
    AgilidadAritmeticaComponent,
    MenuComponent,
    AdivinaMasListadoComponent,
    AgilidadMasListadoComponent,
    ListadoComponent,
    ListadosComponent,
    JuegosComponent,
    RegistroComponent,
    MenuCardComponent,
    CabeceraComponent,
    QuienSoyComponent,
    AnagramaComponent,
    JugadoresListadoComponent

  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatTableModule,
    MatMenuModule,
    MatCardModule,

    MatButtonToggleModule,
    ReactiveFormsModule,
    AppRoutingModule,
    MatDividerModule,
    MatListModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireAuthModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
