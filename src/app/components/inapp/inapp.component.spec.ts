import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { InappComponent } from './inapp.component';

describe('InappComponent', () => {
  let component: InappComponent;
  let fixture: ComponentFixture<InappComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InappComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(InappComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
