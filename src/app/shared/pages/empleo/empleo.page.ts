import { Component, OnInit } from '@angular/core';
import { EmpleosService } from '../services/empleos.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Empleo } from '../../model/empleo';

@Component({
  selector: 'app-empleo',
  templateUrl: './empleo.page.html',
  styleUrls: ['./empleo.page.scss'],
})
export class EmpleoPage implements OnInit {

  empleo: Observable<any>;

  constructor(private empleosService: EmpleosService,  private route: ActivatedRoute, public router: Router) { }

  async ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    this.empleo = this.empleosService.getEmpleo(id);
    console.log('observable', this.empleo);
    this.empleo.subscribe(data => {
      console.log('subscribe', data);
    });

    let auxempleo = await this.empleosService.getEmpleoById2(id);
    console.log('await', auxempleo.titulo);
  }


  eliminarEmpleo(emple: Empleo) {
    this.empleosService.deleteEmpleo(emple.uid);
    this.router.navigate([`lista-empleos`]);
  }



}
