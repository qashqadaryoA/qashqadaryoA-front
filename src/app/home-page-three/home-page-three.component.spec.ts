import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomePageThreeComponent } from './home-page-three.component';

describe('HomePageThreeComponent', () => {
  let component: HomePageThreeComponent;
  let fixture: ComponentFixture<HomePageThreeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomePageThreeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomePageThreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
