import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdatePageComponent } from './update-page.component';

describe('UpdatePageComponent', () => {
  let component: UpdatePageComponent;
  let fixture: ComponentFixture<UpdatePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UpdatePageComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdatePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
