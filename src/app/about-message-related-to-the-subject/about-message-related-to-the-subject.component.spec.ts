import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutMessageRelatedToTheSubjectComponent } from './about-message-related-to-the-subject.component';

describe('AboutMessageRelatedToTheSubjectComponent', () => {
  let component: AboutMessageRelatedToTheSubjectComponent;
  let fixture: ComponentFixture<AboutMessageRelatedToTheSubjectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AboutMessageRelatedToTheSubjectComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AboutMessageRelatedToTheSubjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
