import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutMessageMostViewComponent } from './about-message-most-view.component';

describe('AboutMessageMostViewComponent', () => {
  let component: AboutMessageMostViewComponent;
  let fixture: ComponentFixture<AboutMessageMostViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AboutMessageMostViewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AboutMessageMostViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
