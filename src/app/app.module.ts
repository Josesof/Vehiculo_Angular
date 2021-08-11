import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { RouterModule, Routes } from '@angular/router';
import {HttpClientModule} from '@angular/common/http'
import { FormsModule } from '@angular/forms';



import { AppComponent } from './app.component';
import { ClienteComponent } from './component/Cliente/cliente/cliente.component';
import { VehiculoComponent } from './component/Vehiculo/vehiculo/vehiculo.component';
import { FooterComponent } from './component/Footer/footer/footer.component';
import { MainComponent } from './component/Main/main/main.component';
import { FormComponent } from './component/Cliente/form_cliente/form/form.component';
import { HomeComponent } from './component/Home/home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    ClienteComponent,
    VehiculoComponent,
    FooterComponent,
    MainComponent,
    FormComponent,
    HomeComponent
  ],
  imports: [

    BrowserModule,
    AppRoutingModule,
    RouterModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
