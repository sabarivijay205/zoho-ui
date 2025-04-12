import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ZSignUpComponent } from './z-sign-up.component';

describe('ZSignUpComponent', () => {
  let component: ZSignUpComponent;
  let fixture: ComponentFixture<ZSignUpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ZSignUpComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ZSignUpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
