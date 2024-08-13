import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ZoomcallbackComponent } from './zoomcallback.component';

describe('ZoomcallbackComponent', () => {
  let component: ZoomcallbackComponent;
  let fixture: ComponentFixture<ZoomcallbackComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ZoomcallbackComponent]
    });
    fixture = TestBed.createComponent(ZoomcallbackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
