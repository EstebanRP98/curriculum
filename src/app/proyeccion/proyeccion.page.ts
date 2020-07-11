import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, NavigationExtras } from '@angular/router';
import { Person } from '../interface/person';

@Component({
  selector: 'app-proyeccion',
  templateUrl: './proyeccion.page.html',
  styleUrls: ['./proyeccion.page.scss'],
})
export class ProyeccionPage implements OnInit {

  data:Person;


  constructor(public route:ActivatedRoute, public router:Router) { }

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      if(this.router.getCurrentNavigation().extras.state){
        this.data= this.router.getCurrentNavigation().extras.state.person;
      }
    });
  }

  saludar(){
    this.data.explaboral1="no tiene"
    this.data.explaboral2="no tiene"
    console.log("hola" + this.data.name)
    let extras: NavigationExtras = {
      state: {
        person: this.data
      }
    }
    
    this.router.navigate(['estudios'],extras)
    
  }

}
