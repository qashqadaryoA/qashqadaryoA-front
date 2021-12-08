import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutMessageComponent } from './about-message.component';

describe('AboutMessageComponent', () => {
  let component: AboutMessageComponent;
  let fixture: ComponentFixture<AboutMessageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AboutMessageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AboutMessageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
