import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PagOrderComponent } from './pag-order.component';

describe('PagOrderComponent', () => {
  let component: PagOrderComponent;
  let fixture: ComponentFixture<PagOrderComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PagOrderComponent]
    });
    fixture = TestBed.createComponent(PagOrderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
