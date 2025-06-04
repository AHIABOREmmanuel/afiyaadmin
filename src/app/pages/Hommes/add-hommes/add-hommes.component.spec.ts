import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddHommesComponent } from './add-hommes.component';

describe('AddHommesComponent', () => {
  let component: AddHommesComponent;
  let fixture: ComponentFixture<AddHommesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AddHommesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddHommesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
