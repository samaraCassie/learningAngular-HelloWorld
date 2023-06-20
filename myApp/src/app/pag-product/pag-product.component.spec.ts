import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PagProductComponent } from './pag-product.component';

describe('PagProductComponent', () => {
  let component: PagProductComponent;
  let fixture: ComponentFixture<PagProductComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PagProductComponent]
    });
    fixture = TestBed.createComponent(PagProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
