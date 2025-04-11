import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ZRegisterComponent } from './z-register.component';

describe('ZRegisterComponent', () => {
  let component: ZRegisterComponent;
  let fixture: ComponentFixture<ZRegisterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ZRegisterComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ZRegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
