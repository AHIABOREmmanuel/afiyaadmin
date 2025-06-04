import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEnfantsComponent } from './add-enfants.component';

describe('AddEnfantsComponent', () => {
  let component: AddEnfantsComponent;
  let fixture: ComponentFixture<AddEnfantsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AddEnfantsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddEnfantsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
