import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TwoappComponent } from './twoapp.component';

describe('TwoappComponent', () => {
  let component: TwoappComponent;
  let fixture: ComponentFixture<TwoappComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TwoappComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TwoappComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
