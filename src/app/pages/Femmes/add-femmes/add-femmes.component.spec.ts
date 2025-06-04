import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddFemmesComponent } from './add-femmes.component';

describe('AddFemmesComponent', () => {
  let component: AddFemmesComponent;
  let fixture: ComponentFixture<AddFemmesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AddFemmesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddFemmesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
