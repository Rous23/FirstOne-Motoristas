import { Component, OnInit } from '@angular/core';
import { faChevronRight, faShippingFast } from '@fortawesome/free-solid-svg-icons';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-ordenes-disponibles',
  templateUrl: './ordenes-disponibles.component.html',
  styleUrls: ['./ordenes-disponibles.component.css']
})
export class OrdenesDisponiblesComponent implements OnInit {

  constructor(private modalService:NgbModal) { }

  ngOnInit(): void {
  }
  faChevronRight = faChevronRight
  faShippingFast = faShippingFast
  
  mostrarModalOrden(mostrarModal){
    this.modalService.open(mostrarModal,
      {
        size:'md',
        centered:true,
      })
  }
}
