import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  form: FormGroup;
  loading = false; 

  constructor(private fb: FormBuilder, private _snackBar: MatSnackBar, private router: Router) { 
    this.form = fb.group({
      usuario: ['',Validators.required],
      password: ['',Validators.required]
    })
  }

  ngOnInit(): void {
  }

  ingresar(){
    const user = this.form.value.usuario;
    const password = this.form.value.password;

    // console.log(user);//recogida de datos desde el login user y password se muestran por consola
    // console.log(password);

    if (user == "jpucuna" && password=="admin123") {
      this.fakeLoading();
    } else {
      this.error();
      this.form.reset();
    }
  }

  error(){
    this._snackBar.open("Usuario o contraseña ingresados son invalidos",'',{
      duration: 5000,
      horizontalPosition: "center",
      verticalPosition: "bottom"
    })
  }

  fakeLoading(){
    this.loading = true;
    setTimeout(() => {

      this.router.navigate(['dashboard']);
    }, 2000);
  }

}
