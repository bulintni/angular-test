import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EDUpdateStatusNewsComponent } from './ed-update-status-news.component';

describe('EDUpdateStatusNewsComponent', () => {
  let component: EDUpdateStatusNewsComponent;
  let fixture: ComponentFixture<EDUpdateStatusNewsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EDUpdateStatusNewsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EDUpdateStatusNewsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
