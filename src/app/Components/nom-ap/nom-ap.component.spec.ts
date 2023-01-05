import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NomApComponent } from './nom-ap.component';

describe('NomApComponent', () => {
  let component: NomApComponent;
  let fixture: ComponentFixture<NomApComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NomApComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NomApComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
