import { Component, OnInit } from '@angular/core';

import { Tienda } from './tienda';
import { TiendaService } from './tienda.service';


@Component({
  selector: 'app-tiendas',
  templateUrl: './tiendas.component.html'
})
export class TiendasComponent implements OnInit {


  tiendas: Tienda[];
  constructor(private ti: TiendaService) { }

  ngOnInit(): void {
    //suscribir o registrar el observador
    //se simplifica la funcion anonima
    this.ti.getTiendas().subscribe(tiendas => this.tiendas =tiendas)
    //this.tiendas = this.ti.getTiendas();
    
  }

}
