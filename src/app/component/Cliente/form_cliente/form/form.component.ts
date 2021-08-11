import { Component, OnInit } from '@angular/core';
import {ServicioService} from '../../servicio.service';
import {Cliente} from '../../../Cliente/cliente';
import {Router, ActivatedRoute} from '@angular/router';
import swal from 'sweetalert2';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  public cliente: Cliente = new Cliente();

  constructor(private clienteService:ServicioService,
    private router: Router,private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
     this.activatedRoute.params.subscribe(params =>{
      let id = params['id']
      if(id){
        this.clienteService.getClienteId(id).subscribe((cliente:any) => this.cliente = cliente);
      }
    })
  }

  
   

  public create():void{
    this.clienteService.createCliente(this.cliente).subscribe(
      cliente =>{
        this.router.navigate(['/clientes']);
        swal.fire('Nuevo Cliente',`Cliente ${cliente.nombre} creado con exito `, 'success')
        console.log("Soy el cliente" +  this.cliente);
      }  
    );   
  }

  public update():void{
     this.clienteService.updateCliente(this.cliente).subscribe(
       cliente =>{
         this.router.navigate(['/clientes']);
         swal.fire('Modificado Cliente',`Cliente  Modificado con exito `, 'success');
       }
     )
  }

}
