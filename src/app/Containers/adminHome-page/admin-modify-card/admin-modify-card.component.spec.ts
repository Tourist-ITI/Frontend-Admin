import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminModifyCardComponent } from './admin-modify-card.component';

describe('AdminModifyCardComponent', () => {
  let component: AdminModifyCardComponent;
  let fixture: ComponentFixture<AdminModifyCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminModifyCardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminModifyCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
