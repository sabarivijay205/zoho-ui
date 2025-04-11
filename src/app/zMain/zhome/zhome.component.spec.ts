import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ZhomeComponent } from './zhome.component';

describe('ZhomeComponent', () => {
  let component: ZhomeComponent;
  let fixture: ComponentFixture<ZhomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ZhomeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ZhomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
