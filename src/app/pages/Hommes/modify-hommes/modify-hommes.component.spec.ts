import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifyHommesComponent } from './modify-hommes.component';

describe('ModifyHommesComponent', () => {
  let component: ModifyHommesComponent;
  let fixture: ComponentFixture<ModifyHommesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ModifyHommesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModifyHommesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
