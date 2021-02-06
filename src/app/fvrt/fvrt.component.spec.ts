import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FvrtComponent } from './fvrt.component';

describe('FvrtComponent', () => {
  let component: FvrtComponent;
  let fixture: ComponentFixture<FvrtComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FvrtComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FvrtComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
