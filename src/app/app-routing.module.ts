import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './component/Home/home/home.component';
import { ClienteComponent } from './component/Cliente/cliente/cliente.component';
import { FormComponent } from './component/Cliente/form_cliente/form/form.component';
import { VehiculoComponent } from './component/Vehiculo/vehiculo/vehiculo.component';


const routes: Routes = [ 
  {path:'home', component:HomeComponent},
  {path:'cliente', component:ClienteComponent},
  {path:'formulario_cliente', component:FormComponent},
  {path:'formulario_cliente/:id', component:FormComponent},
  {path:'vehiculo', component:VehiculoComponent},
  {path: '**', pathMatch: 'full', redirectTo: 'home'}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
