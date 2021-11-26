import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomePageTwoComponent } from './home-page-two.component';

describe('HomePageTwoComponent', () => {
  let component: HomePageTwoComponent;
  let fixture: ComponentFixture<HomePageTwoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomePageTwoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomePageTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
