import { Component, OnInit } from '@angular/core';
import {ServicioService} from '../servicio.service';
import {Cliente} from '../../Cliente/cliente';



@Component({
  selector: 'app-cliente',
  templateUrl: './cliente.component.html',
  styleUrls: ['./cliente.component.css']
})
export class ClienteComponent implements OnInit {

  public clientes : any = []; 
  public cliente : any; 

  constructor(private clienteService:ServicioService) {
    this.cliente = new Cliente();
   }

  

/*   public create():void{
    this.clienteService.createCliente(this.cliente).subscribe(
      cliente =>{
        this.router.navigate(['/clientes'])
        console.log("Soy el cliente" +  this.cliente);
      }  
    ); */

   
  

  ngOnInit(): void {
    
  
      this.clienteService.getClientes().subscribe(cliente=>{
     
        this.cliente = cliente;
         
       
      })


  }

}
