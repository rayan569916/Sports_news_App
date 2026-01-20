import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NbaSheduleComponent } from './nba.shedule.component';

describe('NbaSheduleComponent', () => {
  let component: NbaSheduleComponent;
  let fixture: ComponentFixture<NbaSheduleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NbaSheduleComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NbaSheduleComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
