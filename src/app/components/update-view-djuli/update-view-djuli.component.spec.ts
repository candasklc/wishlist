import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateViewDjuliComponent } from './update-view-djuli.component';

describe('UpdateViewDjuliComponent', () => {
  let component: UpdateViewDjuliComponent;
  let fixture: ComponentFixture<UpdateViewDjuliComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateViewDjuliComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateViewDjuliComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
