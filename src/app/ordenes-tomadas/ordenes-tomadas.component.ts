import { Component, OnInit } from '@angular/core';
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
    private cookieService:CookieService
    ) { }//esta inyectando un objeto de tipo ng modal puedo acceder desde cualquier metodo de la clase haciendo esto

  ngOnInit(): void {
    this.cookieValue = this.cookieService.get('idMotoristaFirstone');
    this.motoristaService.obtenerOrdenesTomadas(this.cookieValue).subscribe(
      res=>{
        console.log(res);
        this.ordenesTomadas = res
      },
      error=>console.error(error)
    )
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
  }

}
