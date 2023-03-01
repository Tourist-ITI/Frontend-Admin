import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminGreetingComponent } from './admin-greeting.component';

describe('AdminGreetingComponent', () => {
  let component: AdminGreetingComponent;
  let fixture: ComponentFixture<AdminGreetingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminGreetingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminGreetingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
