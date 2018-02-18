import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FromDemoReactiveFormComponent } from './from-demo-reactive-form.component';

describe('FromDemoReactiveFormComponent', () => {
  let component: FromDemoReactiveFormComponent;
  let fixture: ComponentFixture<FromDemoReactiveFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FromDemoReactiveFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FromDemoReactiveFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
