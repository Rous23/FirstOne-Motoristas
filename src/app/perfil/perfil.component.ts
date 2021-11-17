import { Component, OnInit } from '@angular/core';
import { faAddressCard, faArrowLeft, faChevronRight, faEdit, faKey, faSignOutAlt } from '@fortawesome/free-solid-svg-icons';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
})
export class PerfilComponent implements OnInit {

  constructor(private modalService:NgbModal) { }
  faChevronRight = faChevronRight
  faAddressCard = faAddressCard
  faEdit = faEdit
  faKey = faKey
  faSingOutAlt = faSignOutAlt
  faArrowLeft = faArrowLeft
  ngOnInit(): void {
  }
  abrirModalInformacion(modal){
    this.modalService.open(modal,{
      size:'lg',
      centered:true
    })
  }
  abrirModalPassword(modal){
    this.modalService.open(modal,{
      size:'lg',
      centered:true
    })
  }
}
