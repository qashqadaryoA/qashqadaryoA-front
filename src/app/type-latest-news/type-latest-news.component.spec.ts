import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TypeLatestNewsComponent } from './type-latest-news.component';

describe('TypeLatestNewsComponent', () => {
  let component: TypeLatestNewsComponent;
  let fixture: ComponentFixture<TypeLatestNewsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TypeLatestNewsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TypeLatestNewsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
