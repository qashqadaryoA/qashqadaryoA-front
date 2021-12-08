import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutMessageTypeComponent } from './about-message-type.component';

describe('AboutMessageTypeComponent', () => {
  let component: AboutMessageTypeComponent;
  let fixture: ComponentFixture<AboutMessageTypeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AboutMessageTypeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AboutMessageTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
