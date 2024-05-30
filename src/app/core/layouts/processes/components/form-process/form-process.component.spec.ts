import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormProcessComponent } from './form-process.component';

describe('FormProcessComponent', () => {
  let component: FormProcessComponent;
  let fixture: ComponentFixture<FormProcessComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormProcessComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FormProcessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
