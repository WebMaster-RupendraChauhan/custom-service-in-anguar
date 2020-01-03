import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ItupworksComponent } from './itupworks.component';

describe('ItupworksComponent', () => {
  let component: ItupworksComponent;
  let fixture: ComponentFixture<ItupworksComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ItupworksComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ItupworksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
