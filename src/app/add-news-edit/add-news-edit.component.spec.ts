import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddNewsEditComponent } from './add-news-edit.component';

describe('AddNewsEditComponent', () => {
  let component: AddNewsEditComponent;
  let fixture: ComponentFixture<AddNewsEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AddNewsEditComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AddNewsEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
