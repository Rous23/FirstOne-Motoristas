import { Component, OnInit } from '@angular/core';
import { faChevronRight, faShippingFast, faUserCog } from '@fortawesome/free-solid-svg-icons';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-ordenes-disponibles',
  templateUrl: './ordenes-disponibles.component.html',
  styleUrls: ['./ordenes-disponibles.component.css']
})
export class OrdenesDisponiblesComponent implements OnInit {
  ordenesDisponibles = [
    {
      codigo: '000001',
      nombreCliente: 'Francisca Ramirez',
      direccion: "Col. 3 de mayo",
      horaEmision: "12:00",
      productos: [
        {
          nombre: "pizza",
          cantidad: 2,
        }
      ],
      total:200
    },
    {
      codigo: '000002',
      nombreCliente: 'Francisca Ramirez',
      direccion: "Col. 3 de mayo",
      horaEmision: "12:00",
      productos: [
        {
          nombre: "pizza",
          cantidad: 2,
        }
      ],
      total:200
    },
    {
      codigo: '000003',
      nombreCliente: 'Francisca Ramirez',
      direccion: "Col. 3 de mayo",
      horaEmision: "12:00",
      productos: [
        {
          nombre: "pizza",
          cantidad: 2,
        }
      ],
      total:200
    },
    {
      codigo: '000004',
      nombreCliente: 'Francisca Ramirez',
      direccion: "Col. 3 de mayo",
      horaEmision: "12:00",
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
  constructor(private modalService:NgbModal) { }

  ngOnInit(): void {
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
  tomarOrden(){
    this.modalService.dismissAll()
    console.log("tomar orden");
    
  }
}
