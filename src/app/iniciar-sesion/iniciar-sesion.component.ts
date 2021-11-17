import { Component, OnInit } from '@angular/core';
import { faFacebookF, faGoogle } from '@fortawesome/free-brands-svg-icons';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

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
  constructor(
    private route:Router,
  ) { }
  faGoogle = faGoogle
  faFacebookF = faFacebookF
  ngOnInit(): void {
  }

  get correo(){
    return this.formularioLogin.get('correo')
  }

  get password(){
    return this.formularioLogin.get('password')
  }

  iniciarSesion(){
    console.log(this.formularioLogin.value);
    console.log(this.formularioLogin.valid);
    this.route.navigate(['/ordenes-disponibles']);
  }

}
