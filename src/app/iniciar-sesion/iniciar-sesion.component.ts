import { Component, OnInit } from '@angular/core';
import { faFacebookF, faGoogle } from '@fortawesome/free-brands-svg-icons';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { MotoristasService } from '../services/motoristas.service';

@Component({
  selector: 'app-iniciar-sesion',
  templateUrl: './iniciar-sesion.component.html',
  styleUrls: ['./iniciar-sesion.component.css']
})
export class IniciarSesionComponent implements OnInit {
  formularioLogin = new FormGroup(
    {
      correo:new FormControl('', 
      [
        Validators.required,
        Validators.pattern(/^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/)
      ]
      ),
      password:new FormControl('', 
      [
        Validators.required,
        Validators.minLength(6)
      ]
      )
    }
  );
  cookieValue:string;
  error=false;
  constructor(
    private route:Router, 
    private cookieService:CookieService,
    private motoristasService:MotoristasService
  ) { }
  faGoogle = faGoogle
  faFacebookF = faFacebookF
  ngOnInit(): void {

    this.motoristasService.obtenerMotoristas().subscribe(
      res=>console.log(res),
      error=>console.error(error)
    )
  }

  get correo(){
    return this.formularioLogin.get('correo')
  }

  get password(){
    return this.formularioLogin.get('password')
  }
  
  iniciarSesion(){
    console.log(this.formularioLogin.value);
    this.motoristasService.iniciarSesion(this.formularioLogin.value).subscribe(
      res=>{
        console.log(res);
        if(res!=null){
          this.cookieService.set('idMotoristaFirstone', res._id);
          this.route.navigate(['/ordenes-disponibles']);
        }else{
          this.error=true
          this.correo.setValue('');
          this.password.setValue('');
        }
      },
      error=>console.error(error)
    )
    //this.cookieValue = this.cookieService.get('idMotoristaFirstone');
  }
}
