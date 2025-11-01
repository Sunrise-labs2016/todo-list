import { ComponentFixture, TestBed } from '@angular/core/testing';

import { New } from './new';

describe('New', () => {
  let component: New;
  let fixture: ComponentFixture<New>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [New]
    })
    .compileComponents();

    fixture = TestBed.createComponent(New);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
