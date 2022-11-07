import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaiTesteComponent } from './pai-teste.component';

describe('PaiTesteComponent', () => {
  let component: PaiTesteComponent;
  let fixture: ComponentFixture<PaiTesteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PaiTesteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PaiTesteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
