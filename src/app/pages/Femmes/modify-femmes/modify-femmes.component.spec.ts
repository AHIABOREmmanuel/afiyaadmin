import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifyFemmesComponent } from './modify-femmes.component';

describe('ModifyFemmesComponent', () => {
  let component: ModifyFemmesComponent;
  let fixture: ComponentFixture<ModifyFemmesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ModifyFemmesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModifyFemmesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
