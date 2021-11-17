import { Component, OnInit } from '@angular/core';
import { faFacebookF, faGoogle } from '@fortawesome/free-brands-svg-icons';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registrarse',
  templateUrl: './registrarse.component.html',
  styleUrls: ['./registrarse.component.css']
})
export class RegistrarseComponent implements OnInit {
  formRegistro = new FormGroup(
    {
      nombreCompleto: new FormControl('',
        [
          Validators.required,
          Validators.maxLength(10)
        ]),
      fechaNacimiento:new FormControl('',
      [
        Validators.required,
      ]),
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
      ),
      password2:new FormControl('',[Validators.required,])
    }
  );

  constructor() { }
  faGoogle = faGoogle
  faFacebookF = faFacebookF
  ngOnInit(): void {
  }
  
  get nombreCompleto() {
    return this.formRegistro.get('nombreCompleto');
  }
  get correo() {
    return this.formRegistro.get('correo');
  }
  get fechaNacimiento() {
    return this.formRegistro.get('fechaNacimiento');
  }
  get password() {
    return this.formRegistro.get('password');
  }
  get password2() {
    return this.formRegistro.get('password2');
  }

  registrarUsuario(){
    console.log(this.formRegistro.value);
    console.log(this.formRegistro.valid);
    console.log("Registro");
    
  }
}
