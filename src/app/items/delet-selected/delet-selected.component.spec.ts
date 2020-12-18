import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeletSelectedComponent } from './delet-selected.component';

describe('DeletSelectedComponent', () => {
  let component: DeletSelectedComponent;
  let fixture: ComponentFixture<DeletSelectedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeletSelectedComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DeletSelectedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
