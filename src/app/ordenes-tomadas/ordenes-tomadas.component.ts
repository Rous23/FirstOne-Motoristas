import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { faChevronRight, faShippingFast, faUserCog } from '@fortawesome/free-solid-svg-icons';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { CookieService } from 'ngx-cookie-service';
import { MotoristasService } from '../services/motoristas.service';

@Component({
  selector: 'app-ordenes-tomadas',
  templateUrl: './ordenes-tomadas.component.html',
  styleUrls: ['./ordenes-tomadas.component.css']
})
export class OrdenesTomadasComponent implements OnInit {
  
  ordenesTomadas:any = []
  detalleOrden:any;
  cookieValue:string;

  constructor(
    private modalService:NgbModal,
    private motoristaService:MotoristasService,
    private cookieService:CookieService,
    private route:Router
  ){}
  nombreMotorista:String;
  estadoOrden:String= 'tomada';
  ngOnInit(): void {
    if(this.cookieService.get('idMotoristaFirstone')){
      this.cookieValue = this.cookieService.get('idMotoristaFirstone');
      this.motoristaService.obtenerOrdenesTomadas(this.cookieValue).subscribe(
        res=>{
          console.log(res);
          this.ordenesTomadas = res
          
        },
        error=>console.error(error)
      )
      this.motoristaService.obtenerMotorista(this.cookieService.get('idMotoristaFirstone')).subscribe(
        res=>{
          console.log(res.nombres);
          this.nombreMotorista = res.nombres
          //this.spinnerService.hide();
        },
        error=>{
          console.error(error);
        }
      )
    }else{
      this.route.navigate(['/iniciar-sesion'])
    }
  }
  faUserCog = faUserCog
  faChevronRight = faChevronRight
  faShippingFast = faShippingFast
  
  mostrarModalOrden(modal, item){
    this.modalService.open(modal,
      {
        size:'md',
        centered:true,
      }
    );
    this.detalleOrden = item;
    this.estadoOrden = this.detalleOrden.estado;
  }

  cambiarEstado(estado, orden){
    console.log("idOrden", orden);
    let dato:any =  {
      idCliente: orden.cliente._id,
      idMotorista: this.cookieService.get('idMotoristaFirstone'),
      estado: estado
    }
    this.motoristaService.cambiarEstado(orden._id, dato).subscribe(
      res=>{
        this.nombreMotorista = res.nombres
        this.estadoOrden = estado;
        this.ngOnInit();
        this.modalService.dismissAll();
        //this.spinnerService.hide();
      },
      error=>{
        console.error(error);
      }
    )
  }

}
