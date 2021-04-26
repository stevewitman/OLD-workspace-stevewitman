import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewsletterPageComponent } from './newsletter-page.component';

describe('NewsletterPageComponent', () => {
  let component: NewsletterPageComponent;
  let fixture: ComponentFixture<NewsletterPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewsletterPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewsletterPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
