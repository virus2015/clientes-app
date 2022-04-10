import { Component, OnInit } from '@angular/core';
import { Tienda  }  from './tienda';
import { TiendaService } from './tienda.service';
import { Router , ActivatedRoute } from '@angular/router';
import swal from 'sweetalert2';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html'
})
export class FormComponent implements OnInit {
  //Aqui no lleva corchetes
     public tienda: Tienda = new Tienda();
     public titulo:string ="Crear Tienda que hongos 2";
  constructor(private tiendaService: TiendaService,private router: Router,private activatedRoute: ActivatedRoute ) { }

  ngOnInit(): void {
    this.cargarTienda();
  }

  cargarTienda(): void{
   this.activatedRoute.params.subscribe(params => {
     let id = params['id']
     if(id){
       this.tiendaService.getTienda(id).subscribe( (tienda) => this.tienda = tienda)
     }
   })
 }

  create(): void{
  this.tiendaService.create(this.tienda).subscribe(tienda =>{
    this.router.navigate(['/tiendas'])
    console.log('Nueva tienda', `Tienda ${tienda.nombre} creado con éxito!`, 'success')
  }
  )

   }

   /*create(): void {
   this.clienteService.create(this.cliente).subscribe(cliente => {this.router.navigate(['/clientes'])
       swal('Nuevo cliente', `Cliente ${cliente.nombre} creado con éxito!`, 'success')
     }
     );
 }*/



}
