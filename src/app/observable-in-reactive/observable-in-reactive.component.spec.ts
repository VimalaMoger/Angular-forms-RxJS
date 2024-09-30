import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ObservableInReactiveComponent } from './observable-in-reactive.component';

describe('ObservableInReactiveComponent', () => {
  let component: ObservableInReactiveComponent;
  let fixture: ComponentFixture<ObservableInReactiveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ObservableInReactiveComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ObservableInReactiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
