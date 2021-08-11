import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-vehiculo',
  templateUrl: './vehiculo.component.html',
  styleUrls: ['./vehiculo.component.css']
})
export class VehiculoComponent implements OnInit {

  constructor() { 

    console.log('Hola');
  }

  ngOnInit(): void {
  }

}
