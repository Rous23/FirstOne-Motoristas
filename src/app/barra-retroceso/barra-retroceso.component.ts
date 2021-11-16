import { Component, OnInit } from '@angular/core';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-barra-retroceso',
  templateUrl: './barra-retroceso.component.html',
  styleUrls: ['./barra-retroceso.component.css']
})
export class BarraRetrocesoComponent implements OnInit {

  constructor() { }
  faArrowLeft = faArrowLeft;
  ngOnInit(): void {
  }

}
