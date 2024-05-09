import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EasyUserListComponent } from './app-easy-user-list';

describe('EasyUserListComponent', () => {
  let component: EasyUserListComponent;
  let fixture: ComponentFixture<EasyUserListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EasyUserListComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EasyUserListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
