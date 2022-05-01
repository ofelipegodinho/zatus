import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ZatusComponent } from './zatus.component';

describe('ZatusComponent', () => {
  let component: ZatusComponent;
  let fixture: ComponentFixture<ZatusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ZatusComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ZatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
