import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListFemmesComponent } from './list-femmes.component';

describe('ListFemmesComponent', () => {
  let component: ListFemmesComponent;
  let fixture: ComponentFixture<ListFemmesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ListFemmesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListFemmesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
