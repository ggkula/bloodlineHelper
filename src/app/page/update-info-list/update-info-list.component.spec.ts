import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateInfoListComponent } from './update-info-list.component';

describe('UpdateInfoListComponent', () => {
  let component: UpdateInfoListComponent;
  let fixture: ComponentFixture<UpdateInfoListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateInfoListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateInfoListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
