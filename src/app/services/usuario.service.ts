import { Injectable } from '@angular/core';
import { Usuario } from '../interfaces/usuario';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
  listUsuario: Usuario[] = [
    {usuario: "jpucuna", nombre: 'Joan', apellido: 'Pucuna', sexo: 'masculino'},
    {usuario: "jpucuna", nombre: 'Joan', apellido: 'Pucuna', sexo: 'femenino'},
    {usuario: "jpucuna", nombre: 'Joan', apellido: 'Pucuna', sexo: 'masculino'},
    {usuario: "jpucuna", nombre: 'Joan', apellido: 'Pucuna', sexo: 'masculino'},
    {usuario: "jpucuna", nombre: 'Joan', apellido: 'Pucuna', sexo: 'masculino'},
    {usuario: "jpucuna", nombre: 'Joan', apellido: 'Pucuna', sexo: 'masculino'},
  
  ];
  constructor() { }

  getUsuarios(){
    return this.listUsuario.slice();//con slice le pasamos una copia del array
  }

  eliminarUsuario(i: number){
    this.listUsuario.splice(i,1);
  }

  agregarUsuario(user: Usuario){
    this.listUsuario.unshift(user);//metodo unshift agrega el usuario al principio del array
  }
}
