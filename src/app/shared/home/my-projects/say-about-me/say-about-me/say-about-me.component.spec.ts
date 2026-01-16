import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SayAboutMeComponent } from './say-about-me.component';

describe('SayAboutMeComponent', () => {
  let component: SayAboutMeComponent;
  let fixture: ComponentFixture<SayAboutMeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SayAboutMeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SayAboutMeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
