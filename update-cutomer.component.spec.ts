import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateCutomerComponent } from './update-cutomer.component';

describe('UpdateCutomerComponent', () => {
  let component: UpdateCutomerComponent;
  let fixture: ComponentFixture<UpdateCutomerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateCutomerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdateCutomerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
