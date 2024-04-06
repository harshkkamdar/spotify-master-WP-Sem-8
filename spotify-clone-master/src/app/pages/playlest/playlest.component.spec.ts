import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlaylestComponent } from './playlest.component';

describe('PlaylestComponent', () => {
  let component: PlaylestComponent;
  let fixture: ComponentFixture<PlaylestComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PlaylestComponent]
    });
    fixture = TestBed.createComponent(PlaylestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
