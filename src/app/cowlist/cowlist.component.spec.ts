import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CowlistComponent } from './cowlist.component';

describe('CowlistComponent', () => {
  let component: CowlistComponent;
  let fixture: ComponentFixture<CowlistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CowlistComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CowlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
