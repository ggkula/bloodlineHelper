import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleResolveComponent } from './single-resolve.component';

describe('SingleResolveComponent', () => {
  let component: SingleResolveComponent;
  let fixture: ComponentFixture<SingleResolveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SingleResolveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SingleResolveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
