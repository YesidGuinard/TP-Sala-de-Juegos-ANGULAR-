import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {AppComponent} from './app.component';
import {AdivinaElNumeroComponent} from './components/games/adivina-el-numero/adivina-el-numero.component';
import {ListadoDeResultadosComponent} from './components/sections/listado-de-resultados/listado-de-resultados.component';
import {LoginComponent} from './components/sections/login/login.component';

import {ErrorComponent} from './components/component/error/error.component';
import {PrincipalComponent} from './components/sections/principal/principal.component';
import {AgilidadAritmeticaComponent} from './components/games/agilidad-aritmetica/agilidad-aritmetica.component';

import {JugadoresListadoComponent} from './components/sections/jugadores-listado/jugadores-listado.component';

import {RegistroComponent} from './components/sections/registro/registro.component';
import {CabeceraComponent} from './components/component/cabecera/cabecera.component';
import {QuienSoyComponent} from './components/sections/quien-soy/quien-soy.component';
import {AnagramaComponent} from './components/games/anagrama/anagrama.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {AppRoutingModule} from './app-routing.module';
import {AngularFireModule} from '@angular/fire';
import {AngularFireAuthModule} from '@angular/fire/auth';
import {environment} from '../environments/environment';
import {FlexLayoutModule} from '@angular/flex-layout';
import {AngularFirestoreModule} from '@angular/fire/firestore';
import {AuthService} from './services/auth.service';
import {MaterialModule} from './components/component/Material/material.module';
import { MenuJuegosComponent } from './components/sections/juegos/menu-juegos/menu-juegos.component';
import {JuegosComponent} from './components/sections/juegos/juegos.component';
import {MatExpansionModule} from '@angular/material/expansion';
import { PiedraComponent } from './components/games/piedra/piedra.component';
import { TatetiComponent } from './components/games/tateti/tateti.component';
import { MemotestComponent } from './components/games/memotest/memotest.component';
import { SecuenciaComponent } from './components/games/secuencia/secuencia.component';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatRadioModule} from '@angular/material/radio';



@NgModule({
  declarations: [
    AppComponent,
    AdivinaElNumeroComponent,
    ListadoDeResultadosComponent,
    ErrorComponent,
    PrincipalComponent,
    LoginComponent,
    AgilidadAritmeticaComponent,
    RegistroComponent,
    JuegosComponent,
    CabeceraComponent,
    QuienSoyComponent,
    AnagramaComponent,
    JugadoresListadoComponent,
    MenuJuegosComponent,
    PiedraComponent,
    TatetiComponent,
    MemotestComponent,
    SecuenciaComponent

  ],
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    ReactiveFormsModule,
    AppRoutingModule,
    MaterialModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFirestoreModule,
    AngularFireAuthModule,
    MatExpansionModule,
    MatCheckboxModule,
    MatRadioModule
  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
