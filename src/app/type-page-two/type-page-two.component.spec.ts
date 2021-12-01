import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TypePageTwoComponent } from './type-page-two.component';

describe('TypePageTwoComponent', () => {
  let component: TypePageTwoComponent;
  let fixture: ComponentFixture<TypePageTwoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TypePageTwoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TypePageTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
