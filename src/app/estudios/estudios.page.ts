import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, NavigationExtras } from '@angular/router';
import { Person } from '../interface/person';

@Component({
  selector: 'app-estudios',
  templateUrl: './estudios.page.html',
  styleUrls: ['./estudios.page.scss'],
})
export class EstudiosPage implements OnInit {

  dataproyeccion:Person;
  constructor(public route:ActivatedRoute,public router:Router) { }

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      if(this.router.getCurrentNavigation().extras.state){
        this.dataproyeccion= this.router.getCurrentNavigation().extras.state.person;
      }
    });
  }

  saludar(){
    console.log("hola" + this.dataproyeccion.name)
    let extras: NavigationExtras = {
      state: {
        person: this.dataproyeccion
      }
    }
    this.router.navigate(['presentacion'],extras)
    
  }

}
