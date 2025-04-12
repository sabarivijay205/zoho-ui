import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ZSignInComponent } from './z-sign-in.component';

describe('ZSignInComponent', () => {
  let component: ZSignInComponent;
  let fixture: ComponentFixture<ZSignInComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ZSignInComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ZSignInComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
