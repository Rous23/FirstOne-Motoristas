import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InfromativoComponent } from './infromativo/infromativo.component';
import { IniciarSesionComponent } from './iniciar-sesion/iniciar-sesion.component';
import { OrdenesDisponiblesComponent } from './ordenes-disponibles/ordenes-disponibles.component';
import { OrdenesTomadasComponent } from './ordenes-tomadas/ordenes-tomadas.component';
import { PerfilComponent } from './perfil/perfil.component';
import { RegistrarseComponent } from './registrarse/registrarse.component';
import { SolicitudRegistroComponent } from './solicitud-registro/solicitud-registro.component';

const routes: Routes = [
  {path: '', component: InfromativoComponent},
  {path: 'iniciar-sesion', component: IniciarSesionComponent},
  {path: 'perfil', component: PerfilComponent},
  {path: 'registrarse', component: RegistrarseComponent},
  {path: 'solicitud-registro', component: SolicitudRegistroComponent},
  {path: 'ordenes-disponibles', component: OrdenesDisponiblesComponent},
  {path: 'ordenes-tomadas', component: OrdenesTomadasComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
