import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HitsHeaderComponent } from './hits-header.component';

describe('HitsHeaderComponent', () => {
  let component: HitsHeaderComponent;
  let fixture: ComponentFixture<HitsHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HitsHeaderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HitsHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
