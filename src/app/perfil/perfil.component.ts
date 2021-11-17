import { Component, OnInit } from '@angular/core';
import { faAddressCard, faArrowLeft, faChevronRight, faEdit, faKey, faSignOutAlt } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
})
export class PerfilComponent implements OnInit {

  constructor() { }
  faChevronRight = faChevronRight
  faAddressCard = faAddressCard
  faEdit = faEdit
  faKey = faKey
  faSingOutAlt = faSignOutAlt
  faArrowLeft = faArrowLeft
  ngOnInit(): void {
  }

}
