import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RestaurantsortbyComponent } from './restaurantsortby.component';

describe('RestaurantsortbyComponent', () => {
  let component: RestaurantsortbyComponent;
  let fixture: ComponentFixture<RestaurantsortbyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RestaurantsortbyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RestaurantsortbyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
