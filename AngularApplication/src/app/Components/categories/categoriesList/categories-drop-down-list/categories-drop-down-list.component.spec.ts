import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoriesDropDownListComponent } from './categories-drop-down-list.component';

describe('CategoriesDropDownListComponent', () => {
  let component: CategoriesDropDownListComponent;
  let fixture: ComponentFixture<CategoriesDropDownListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CategoriesDropDownListComponent]
    });
    fixture = TestBed.createComponent(CategoriesDropDownListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
