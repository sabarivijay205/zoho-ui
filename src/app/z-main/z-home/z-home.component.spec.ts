import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ZHomeComponent } from './z-home.component';

describe('ZHomeComponent', () => {
  let component: ZHomeComponent;
  let fixture: ComponentFixture<ZHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ZHomeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ZHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
