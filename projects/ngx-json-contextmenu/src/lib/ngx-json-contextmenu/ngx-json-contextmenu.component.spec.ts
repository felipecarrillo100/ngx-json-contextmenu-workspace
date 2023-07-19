import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxJsonContextmenuComponent } from './ngx-json-contextmenu.component';

describe('NgxJsonContextmenuComponent', () => {
  let component: NgxJsonContextmenuComponent;
  let fixture: ComponentFixture<NgxJsonContextmenuComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NgxJsonContextmenuComponent]
    });
    fixture = TestBed.createComponent(NgxJsonContextmenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
