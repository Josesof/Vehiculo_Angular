export class Cliente {
 clienteID:any;
 nombre:String;
 apellido:String;  
 tipo_documento:String;
 documento:String;
 direccion:String;
 codigo_postal:String;
 numero_telefono1:String;
 numero_telefono2:String;
 correo_electronico:String;
 genero:String;
 fecha_nacimiento:Date = new Date();
 nivel_estudio:String;
 licencia_conduccion:String;
 fecha_vencimiento_licencia:Date = new Date();
 contrasena:String;

 constructor(){
     this.nombre='';
     this.apellido='';
     this.tipo_documento='';
     this.documento='';
     this.direccion='';
     this.codigo_postal='';
     this.numero_telefono1='';
     this.numero_telefono2='';
     this.correo_electronico='';
     this.genero='';
     this.fecha_nacimiento =  new Date();
     this.nivel_estudio='';
     this.licencia_conduccion = '';
     this.fecha_vencimiento_licencia= new Date();
     this.contrasena='';

 }

}
