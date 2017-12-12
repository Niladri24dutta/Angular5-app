import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TemplateFrmComponent } from './template-frm.component';

describe('TemplateFrmComponent', () => {
  let component: TemplateFrmComponent;
  let fixture: ComponentFixture<TemplateFrmComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TemplateFrmComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TemplateFrmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
