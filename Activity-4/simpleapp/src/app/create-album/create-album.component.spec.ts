import { waitForAsync, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateAlbumComponent } from './create-album.component';
import { describe, beforeEach, it } from 'node:test';

describe('CreateAlbumComponent', () => {
  let component: CreateAlbumComponent;
  let fixture: ComponentFixture<CreateAlbumComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateAlbumComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateAlbumComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
