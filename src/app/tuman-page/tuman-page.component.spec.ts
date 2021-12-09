import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TumanPageComponent } from './tuman-page.component';

describe('TumanPageComponent', () => {
  let component: TumanPageComponent;
  let fixture: ComponentFixture<TumanPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TumanPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TumanPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
