import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DukanamComponent } from './dukanam.component';

describe('DukanamComponent', () => {
  let component: DukanamComponent;
  let fixture: ComponentFixture<DukanamComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DukanamComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DukanamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
