import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaUserPage } from './lista-user.page';

describe('ListaUserPage', () => {
  let component: ListaUserPage;
  let fixture: ComponentFixture<ListaUserPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListaUserPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaUserPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
