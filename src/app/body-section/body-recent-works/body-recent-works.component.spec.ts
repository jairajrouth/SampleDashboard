import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BodyRecentWorksComponent } from './body-recent-works.component';

describe('BodyRecentWorksComponent', () => {
  let component: BodyRecentWorksComponent;
  let fixture: ComponentFixture<BodyRecentWorksComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BodyRecentWorksComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BodyRecentWorksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
