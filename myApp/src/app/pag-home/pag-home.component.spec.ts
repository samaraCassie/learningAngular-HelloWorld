import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PagHomeComponent } from './pag-home.component';

describe('PagHomeComponent', () => {
  let component: PagHomeComponent;
  let fixture: ComponentFixture<PagHomeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PagHomeComponent]
    });
    fixture = TestBed.createComponent(PagHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
