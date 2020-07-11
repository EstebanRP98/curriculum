import { Component, OnInit } from '@angular/core';
import { Person } from '../interface/person';
import { ActivatedRoute, Router, NavigationExtras } from '@angular/router';

@Component({
  selector: 'app-experiencia',
  templateUrl: './experiencia.page.html',
  styleUrls: ['./experiencia.page.scss'],
})
export class ExperienciaPage implements OnInit {
  dataexperiencia:Person;
  constructor(public route:ActivatedRoute, public router:Router) { }

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      if(this.router.getCurrentNavigation().extras.state){
        this.dataexperiencia= this.router.getCurrentNavigation().extras.state.person;
      }
    });
  }

  saludar(){
    this.dataexperiencia.proyeccion="...."
    
    let extras: NavigationExtras = {
      state: {
        person: this.dataexperiencia
      }
    }
    
    this.router.navigate(['estudios'],extras)
    
  }

}
