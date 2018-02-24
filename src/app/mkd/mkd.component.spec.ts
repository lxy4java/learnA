import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MkdComponent } from './mkd.component';

describe('MkdComponent', () => {
  let component: MkdComponent;
  let fixture: ComponentFixture<MkdComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MkdComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MkdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
