import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DataAndEventBindingComponent } from './data-and-event-binding.component';

describe('DataAndEventBindingComponent', () => {
  let component: DataAndEventBindingComponent;
  let fixture: ComponentFixture<DataAndEventBindingComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DataAndEventBindingComponent]
    });
    fixture = TestBed.createComponent(DataAndEventBindingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
