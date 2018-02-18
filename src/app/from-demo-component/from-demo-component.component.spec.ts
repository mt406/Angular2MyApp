import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FromDemoComponentComponent } from './from-demo-component.component';

describe('FromDemoComponentComponent', () => {
  let component: FromDemoComponentComponent;
  let fixture: ComponentFixture<FromDemoComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FromDemoComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FromDemoComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
