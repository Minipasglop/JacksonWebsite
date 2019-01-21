import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CodeCarouselItemComponent } from './code-carousel-item.component';

describe('CodeCarouselItemComponent', () => {
  let component: CodeCarouselItemComponent;
  let fixture: ComponentFixture<CodeCarouselItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CodeCarouselItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CodeCarouselItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
