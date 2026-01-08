import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NbaPlayerDetailsComponent } from './nba.player.details.component';

describe('NbaPlayerDetailsComponent', () => {
  let component: NbaPlayerDetailsComponent;
  let fixture: ComponentFixture<NbaPlayerDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NbaPlayerDetailsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NbaPlayerDetailsComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
