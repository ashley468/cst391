import { waitForAsync, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteAlbumComponent } from './delete-album.component';
import { beforeEach, describe, it } from 'node:test';

describe('DeleteAlbumComponent', () => {
  let component: DeleteAlbumComponent;
  let fixture: ComponentFixture<DeleteAlbumComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ DeleteAlbumComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteAlbumComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
