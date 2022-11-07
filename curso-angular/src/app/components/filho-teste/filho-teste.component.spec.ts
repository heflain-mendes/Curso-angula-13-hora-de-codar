import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FilhoTesteComponent } from './filho-teste.component';

describe('FilhoTesteComponent', () => {
  let component: FilhoTesteComponent;
  let fixture: ComponentFixture<FilhoTesteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FilhoTesteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FilhoTesteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
