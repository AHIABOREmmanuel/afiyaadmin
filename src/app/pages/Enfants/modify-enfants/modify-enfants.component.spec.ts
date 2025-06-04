import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifyEnfantsComponent } from './modify-enfants.component';

describe('ModifyEnfantsComponent', () => {
  let component: ModifyEnfantsComponent;
  let fixture: ComponentFixture<ModifyEnfantsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ModifyEnfantsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModifyEnfantsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
