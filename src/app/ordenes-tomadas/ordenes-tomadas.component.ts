import { Component, OnInit } from '@angular/core';
import { faChevronRight, faShippingFast, faUserCog } from '@fortawesome/free-solid-svg-icons';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-ordenes-tomadas',
  templateUrl: './ordenes-tomadas.component.html',
  styleUrls: ['./ordenes-tomadas.component.css']
})
export class OrdenesTomadasComponent implements OnInit {

  constructor(private modalService:NgbModal) { }//esta inyectando un objeto de tipo ng modal puedo acceder desde cualquier metodo de la clase haciendo esto

  ngOnInit(): void {
  }
  faUserCog = faUserCog
  faChevronRight = faChevronRight
  faShippingFast = faShippingFast
  mostrarModalOrden(modal){
    this.modalService.open(modal,
      {
        size:'md',
        centered:true,
      })
  }

}
