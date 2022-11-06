import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnvetsComponent } from './envets.component';

describe('EnvetsComponent', () => {
  let component: EnvetsComponent;
  let fixture: ComponentFixture<EnvetsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EnvetsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EnvetsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
