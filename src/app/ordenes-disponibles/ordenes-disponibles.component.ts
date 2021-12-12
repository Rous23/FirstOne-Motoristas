import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
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
    private cookieService:CookieService,
    private route:Router
    ) {}
  nombreMotorista:String;
  ngOnInit(): void {
    if (this.cookieService.get('idMotoristaFirstone')) {
      this.cookieValue = this.cookieService.get('idMotoristaFirstone');
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
    }else {
      this.route.navigate(['/iniciar-sesion'])
    }


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
    let orden;
    for (let i = 0; i < this.ordenesDisponibles.length; i++) {
      if (item._id == this.ordenesDisponibles[i]._id) {
        orden = this.ordenesDisponibles[i];
      }
    }

    this.motoristaService.guardarOrden(this.cookieValue,orden).subscribe(
      res=>{
        console.log(res);
        if (res.modifiedCount==1){
          this.ordesDisponiblesService.borrarOrden(item._id).subscribe(
            res=>{
              console.log(res),
              this.ordesDisponiblesService.obtenerOrdenesDisponibles().subscribe(
                res=>{
                  console.log(res);
                  this.ordenesDisponibles = res;
                },
                error=>console.error(error)
              )
            },
            error=>console.error(error)
          )
        }
      },
      error=>console.error(error)
    )        
    this.modalService.dismissAll()
  }
}
