import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OneappComponent } from './oneapp.component';

describe('OneappComponent', () => {
  let component: OneappComponent;
  let fixture: ComponentFixture<OneappComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [OneappComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OneappComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
