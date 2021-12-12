import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InfromativoComponent } from './infromativo/infromativo.component';
import { BarraRetrocesoComponent } from './barra-retroceso/barra-retroceso.component';
import { IniciarSesionComponent } from './iniciar-sesion/iniciar-sesion.component';
import { PerfilComponent } from './perfil/perfil.component';
import { RegistrarseComponent } from './registrarse/registrarse.component';
import { SolicitudRegistroComponent } from './solicitud-registro/solicitud-registro.component';
import { OrdenesDisponiblesComponent } from './ordenes-disponibles/ordenes-disponibles.component';
import { LogoComponent } from './logo/logo.component';
import { OrdenesTomadasComponent } from './ordenes-tomadas/ordenes-tomadas.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
@NgModule({
  declarations: [
    AppComponent,
    InfromativoComponent,
    BarraRetrocesoComponent,
    IniciarSesionComponent,
    PerfilComponent,
    RegistrarseComponent,
    SolicitudRegistroComponent,
    OrdenesDisponiblesComponent,
    LogoComponent,
    OrdenesTomadasComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FontAwesomeModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
