import { TestBed } from '@angular/core/testing';

import { NgxJsonContextmenuService } from './ngx-json-contextmenu.service';

describe('NgxJsonContextmenuService', () => {
  let service: NgxJsonContextmenuService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NgxJsonContextmenuService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
