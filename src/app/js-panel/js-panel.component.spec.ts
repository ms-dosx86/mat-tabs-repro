import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JsPanelComponent } from './js-panel.component';

describe('JsPanelComponent', () => {
  let component: JsPanelComponent;
  let fixture: ComponentFixture<JsPanelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JsPanelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JsPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
