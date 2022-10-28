import { Component, OnInit } from '@angular/core';
import { menu } from 'src/app/interfaces/menu';
import { MenuService } from 'src/app/services/menu.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  menu: menu[] =[];//array que se usará para la recogida de datos y plasmarlos en el html

  constructor(private _menuservice: MenuService) { }

  ngOnInit(): void {
    this.cargarMenu();
  }

  cargarMenu(){
    this._menuservice.getMenu().subscribe(data=>{
      this.menu=data;//pase de datos desde el getMenu del menuservices
    });
  }
}
