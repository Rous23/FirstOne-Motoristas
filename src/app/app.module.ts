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
import { ModalOrdenTomadaComponent } from './modal-orden-tomada/modal-orden-tomada.component';
import { OrdenesTomadasComponent } from './ordenes-tomadas/ordenes-tomadas.component';

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
    ModalOrdenTomadaComponent,
    OrdenesTomadasComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
