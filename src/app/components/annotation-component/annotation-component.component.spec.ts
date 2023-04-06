import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnnotationComponentComponent } from './annotation-component.component';

describe('AnnotationComponentComponent', () => {
  let component: AnnotationComponentComponent;
  let fixture: ComponentFixture<AnnotationComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AnnotationComponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AnnotationComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
