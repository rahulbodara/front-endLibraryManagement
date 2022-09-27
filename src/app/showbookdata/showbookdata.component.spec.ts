import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowbookdataComponent } from './showbookdata.component';

describe('ShowbookdataComponent', () => {
  let component: ShowbookdataComponent;
  let fixture: ComponentFixture<ShowbookdataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowbookdataComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowbookdataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
