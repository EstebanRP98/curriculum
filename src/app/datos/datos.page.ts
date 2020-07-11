import { Component, OnInit, SimpleChange } from '@angular/core';
import { Person } from '../interface/person';
import { NavigationExtras, Router } from '@angular/router';

@Component({
  selector: 'app-datos',
  templateUrl: './datos.page.html',
  styleUrls: ['./datos.page.scss'],
})
export class DatosPage implements OnInit {

  person: Person = {
    name:"",
    cedula:"",
    proyeccion:"",
    explaboral1:"",
    explaboral2:"",
    titulo3:"",
    titulo4:""
  }
  public exp: boolean=false;
  constructor(public router:Router) { }

  ngOnInit() {
  }
  saludar(){
    console.log("hola" + this.person.name)
    let extras: NavigationExtras = {
      state: {
        person: this.person
      }
    }
    if(this.exp==true){
      this.router.navigate(['experiencia'],extras)
    }else{
      this.router.navigate(['proyeccion'],extras)
    }
    
    
  }
}
