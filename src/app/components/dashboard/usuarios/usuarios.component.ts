import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Usuario } from 'src/app/interfaces/usuario';
import { UsuarioService } from 'src/app/services/usuario.service';




@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css']
})
export class UsuariosComponent implements OnInit {

  listUsuario: Usuario[] = [];

  displayedColumns: string[] = ['usuario', 'nombre', 'apellido', 'sexo', 'acciones'];
  dataSource!: MatTableDataSource<any>;
  constructor(private _usuarioService:UsuarioService, private _snackBar: MatSnackBar) { }

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  
  ngOnInit(): void {
    this.cargarUsuario();
  }

  cargarUsuario(){
    this.listUsuario = this._usuarioService.getUsuarios();
    this.dataSource = new MatTableDataSource(this.listUsuario);
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  mensaje(){
    this._snackBar.open("Usuario correctamente eliminado",'',{
      duration: 2000,
      horizontalPosition: "right",
      verticalPosition: "bottom"
    })
  }

  eliminarUsuario(i: number){
   this._usuarioService.eliminarUsuario(i);
   this.mensaje()
   this.cargarUsuario();
  }
}
