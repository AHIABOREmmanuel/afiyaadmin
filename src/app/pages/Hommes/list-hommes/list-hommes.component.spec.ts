import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListHommesComponent } from './list-hommes.component';

describe('ListHommesComponent', () => {
  let component: ListHommesComponent;
  let fixture: ComponentFixture<ListHommesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ListHommesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListHommesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
