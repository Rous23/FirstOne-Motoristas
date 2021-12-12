import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { faAddressCard, faArrowLeft, faChevronRight, faEdit, faKey, faSignOutAlt } from '@fortawesome/free-solid-svg-icons';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { CookieService } from 'ngx-cookie-service';
import { MotoristasService } from '../services/motoristas.service';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
})
export class PerfilComponent implements OnInit {
  usuario:any;
  constructor(
    private modalService:NgbModal,
    private motoristaService:MotoristasService,
    private cookieService:CookieService,
    private route:Router
  ){}
  faChevronRight = faChevronRight
  faAddressCard = faAddressCard
  faEdit = faEdit
  faKey = faKey
  faSingOutAlt = faSignOutAlt
  faArrowLeft = faArrowLeft
  formContrasena = new FormGroup({
    contrasena: new FormControl('', [Validators.minLength(6), Validators.required]),
    contrasena2: new FormControl('', [Validators.minLength(6), Validators.required])
  })
  nombres:string;
  correo:string;
  error = false;
  ngOnInit(): void {
    if (this.cookieService.get('idMotoristaFirstone')) {
      this.motoristaService.obtenerMotorista(this.cookieService.get('idMotoristaFirstone')).subscribe(
        res=>{
          console.log(res);
          this.nombres=res.nombres
          this.correo=res.correo
          this.usuario={
            nombres: res.nombres,
            apellidos: res.apellidos,
            usuario: res.usuario,
            genero: res.genero,
            correo: res.correo,
            telefono: res.telefono,
            fechaNacimiento: res.fechaNacimiento
          }
          //this.spinnerService.hide();
        },
        error=>{
          console.error(error);
        }
      )
    }else {
      this.route.navigate(['/iniciar-sesion']);
    }
  }

  actualizarMotorista(){
    this.motoristaService.actualizarDatos(this.cookieService.get('idMotoristaFirstone'),this.usuario).subscribe(
      res=>{
        console.log(res);
        this.ngOnInit();
        this.modalService.dismissAll()
      },
      error=>console.error(error)
    )
  }
  
  actualizarContrasena(){
    if(this.contrasena.value != this.contrasena2.value){
      this.error = true
    }else{
      console.log(this.contrasena);
      this.motoristaService.actualizarContrasena(this.cookieService.get('idMotoristaFirstone'),this.contrasena.value).subscribe(
        res=>{
          console.log(res);
          this.modalService.dismissAll()
          this.contrasena.setValue('')
          this.contrasena2.setValue('')
        },
        error=>{
          console.error(error);
        }
      )
    }
  }

  get contrasena(){
    return this.formContrasena.get('contrasena')
  }

  get contrasena2(){
    return this.formContrasena.get('contrasena2')
  }

  abrirModalInformacion(modal){
    this.modalService.open(modal,{
      size:'lg',
      centered:true
    })
  }
  abrirModalPassword(modal){
    this.modalService.open(modal,{
      size:'lg',
      centered:true
    })
  }
  cerrarSesion(){
    this.cookieService.delete('idMotoristaFirstone');
    this.route.navigate(['/iniciar-sesion'])
  }
}
