import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ObservableImplInCallbackReactiveComponent } from './observable-impl-in-callback-reactive.component';

describe('ObservableImplInCallbackReactiveComponent', () => {
  let component: ObservableImplInCallbackReactiveComponent;
  let fixture: ComponentFixture<ObservableImplInCallbackReactiveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ObservableImplInCallbackReactiveComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ObservableImplInCallbackReactiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
