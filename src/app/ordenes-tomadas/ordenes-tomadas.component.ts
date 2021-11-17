import { Component, OnInit } from '@angular/core';
import { faChevronRight, faShippingFast, faUserCog } from '@fortawesome/free-solid-svg-icons';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-ordenes-tomadas',
  templateUrl: './ordenes-tomadas.component.html',
  styleUrls: ['./ordenes-tomadas.component.css']
})
export class OrdenesTomadasComponent implements OnInit {
  
  ordenesTomadas = [
    {
      codigo: '000001',
      nombreCliente: 'Francisca Ramirez',
      direccion: "Col. 3 de mayo",
      horaEmision: "12:00",
      estado: "En camino",
      productos: [
        {
          nombre: "pizza",
          cantidad: 2,
        }
      ],
      total:200
    },
    {
      codigo: '000005',
      nombreCliente: 'Francisca Ramirez',
      direccion: "Col. 3 de mayo",
      horaEmision: "12:00",
      estado: "En origen",
      productos: [
        {
          nombre: "pizza",
          cantidad: 2,
        }
      ],
      total:200
    },
    {
      codigo: '000006',
      nombreCliente: 'Francisca Ramirez',
      direccion: "Col. 3 de mayo",
      horaEmision: "12:00",
      estado: "En camino",
      productos: [
        {
          nombre: "pizza",
          cantidad: 2,
        }
      ],
      total:200
    }
  ];

  detalleOrden:any;

  constructor(private modalService:NgbModal) { }//esta inyectando un objeto de tipo ng modal puedo acceder desde cualquier metodo de la clase haciendo esto

  ngOnInit(): void {
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
