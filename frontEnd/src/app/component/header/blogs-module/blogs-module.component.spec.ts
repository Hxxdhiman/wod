import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogsModuleComponent } from './blogs-module.component';

describe('BlogsModuleComponent', () => {
  let component: BlogsModuleComponent;
  let fixture: ComponentFixture<BlogsModuleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BlogsModuleComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BlogsModuleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
