import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IndividualFamilyComponent } from './individual-family.component';

describe('IndividualFamilyComponent', () => {
  let component: IndividualFamilyComponent;
  let fixture: ComponentFixture<IndividualFamilyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IndividualFamilyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IndividualFamilyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
