import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ProyeccionPage } from './proyeccion.page';

describe('ProyeccionPage', () => {
  let component: ProyeccionPage;
  let fixture: ComponentFixture<ProyeccionPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProyeccionPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ProyeccionPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
