import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateInfoDetailComponent } from './update-info-detail.component';

describe('UpdateInfoDetailComponent', () => {
  let component: UpdateInfoDetailComponent;
  let fixture: ComponentFixture<UpdateInfoDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateInfoDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateInfoDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
