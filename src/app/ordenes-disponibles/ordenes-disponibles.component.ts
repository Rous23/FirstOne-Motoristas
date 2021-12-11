import { Component, OnInit } from '@angular/core';
import { faChevronRight, faShippingFast, faUserCog } from '@fortawesome/free-solid-svg-icons';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { CookieService } from 'ngx-cookie-service';
import { MotoristasService } from '../services/motoristas.service';
import { OrdenesDisponiblesService } from '../services/ordenes-disponibles.service';

@Component({
  selector: 'app-ordenes-disponibles',
  templateUrl: './ordenes-disponibles.component.html',
  styleUrls: ['./ordenes-disponibles.component.css']
})
export class OrdenesDisponiblesComponent implements OnInit {
  ordenesDisponibles:any=[]
  detalleOrden:any;
  cookieValue:string;

  constructor(
    private modalService:NgbModal,
    private ordesDisponiblesService:OrdenesDisponiblesService,
    private motoristaService:MotoristasService,
    private cookieService:CookieService
    ) { }

  nombreMotorista:String;

  ngOnInit(): void {
    this.cookieValue = this.cookieService.get('idMotoristaFirstone');
    console.log(this.cookieValue);
    this.ordesDisponiblesService.obtenerOrdenesDisponibles().subscribe(
      res=>{
        console.log(res);
        this.ordenesDisponibles = res
      },
      error=>console.error(error)
    );
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
  }
  faUserCog = faUserCog
  faChevronRight = faChevronRight
  faShippingFast = faShippingFast
  
  mostrarModalOrden(mostrarModal,item){
    this.modalService.open(mostrarModal,
      {
        size:'md',
        centered:true,
      }
    );
    this.detalleOrden = item;
  }
  tomarOrden(item){
    this.modalService.dismissAll()
    this.motoristaService.guardarOrden(this.cookieValue,item._id).subscribe(
      res=>{
        console.log(res);
        if (res.modifiedCount==1) {
          this.ordesDisponiblesService.obtenerOrdenesDisponibles().subscribe(
            res=>{
              console.log(res);
              this.ordenesDisponibles = res
            },
            error=>console.error(error)
          )
        }
      },
      error=>console.error(error)
    )
    
  }

}
