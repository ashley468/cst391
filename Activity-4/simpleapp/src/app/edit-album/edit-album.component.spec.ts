import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditAlbumComponent } from './edit-album.component';
import { describe, beforeEach, it } from 'node:test';

describe('EditAlbumComponent', () => {
  let component: EditAlbumComponent;
  let fixture: ComponentFixture<EditAlbumComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EditAlbumComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EditAlbumComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
