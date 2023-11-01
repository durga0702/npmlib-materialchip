import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NpmlibMaterialchipComponent } from './npmlib-materialchip.component';

describe('NpmlibMaterialchipComponent', () => {
  let component: NpmlibMaterialchipComponent;
  let fixture: ComponentFixture<NpmlibMaterialchipComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NpmlibMaterialchipComponent]
    });
    fixture = TestBed.createComponent(NpmlibMaterialchipComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
