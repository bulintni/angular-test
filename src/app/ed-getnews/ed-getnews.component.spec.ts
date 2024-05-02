import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EdGetnewsComponent } from './ed-getnews.component';

describe('EdGetnewsComponent', () => {
  let component: EdGetnewsComponent;
  let fixture: ComponentFixture<EdGetnewsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EdGetnewsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EdGetnewsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
