import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ByLanguagePageComponent } from './by-language-page.component';

describe('ByLanguagePageComponent', () => {
  let component: ByLanguagePageComponent;
  let fixture: ComponentFixture<ByLanguagePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ByLanguagePageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ByLanguagePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
