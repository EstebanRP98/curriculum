import { Component, OnInit } from '@angular/core';
import { Empleo } from '../../model/empleo';
import { EmpleosService } from '../services/empleos.service';
import { Observable } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { CameraOptions, Camera } from '@ionic-native/camera/ngx';


@Component({
  selector: 'app-crear-empleo',
  templateUrl: './crear-empleo.page.html',
  styleUrls: ['./crear-empleo.page.scss'],
})
export class CrearEmpleoPage implements OnInit {

  empleo: Empleo = new Empleo();

  constructor(private empleosService: EmpleosService,  private route: ActivatedRoute, private camera: Camera) { }

  ngOnInit() {
  }
  async guardarEmpleo() {
    console.log(this.empleo);
    //this.empleosService.insertEmpleo(this.empleo);
    await this.empleosService.saveEmpleado2(this.empleo);
  }

  tomarfoto(){
    const options: CameraOptions = {
      quality: 100,
      destinationType: this.camera.DestinationType.FILE_URI,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE
    }
    this.camera.getPicture(options).then((imageData) => {
     // imageData is either a base64 encoded string or a file URI
     // If it's base64 (DATA_URL):
     let base64Image = 'data:image/jpeg;base64,' + imageData;
     console.log(base64Image);
    }, (err) => {
     // Handle error
    });
  }

  imagenCargada(e){
    console.log("imagen cargada:", e);
    console.log(JSON.stringify(e));
    this.empleo.image = e;
  }


}
