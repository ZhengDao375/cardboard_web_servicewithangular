import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AreaBrowseComponent } from './area-browse.component';

describe('AreaBrowseComponent', () => {
  let component: AreaBrowseComponent;
  let fixture: ComponentFixture<AreaBrowseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AreaBrowseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AreaBrowseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
