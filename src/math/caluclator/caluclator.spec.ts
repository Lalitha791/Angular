import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Caluclator } from './caluclator';

describe('Caluclator', () => {
  let component: Caluclator;
  let fixture: ComponentFixture<Caluclator>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Caluclator]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Caluclator);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
