# Activity 3

## Part1
## Screenshots

![Big](big.png)
- This is a screenshot of my the begginig/home page in the way I edited it. I deleted the code in it and added a grid from the bootstrap. The devtools show what it would look like in a laptop/computer

![Small](small.png)
- This is a screenshot of the devtools showing what it would look like in a different device, which is a phone in this case. 

![BeforeEntering](beforeEntering.png)
- This is a screenshot of the html section before entering any information. Although, in this case it would be your name. 

![AfterEntering](afterEntering.png)
- This is a screenshot where it would show after I entered my name and in its place would show a message welcome in me such as "Welcome Ashley". 

![BuyButton](buyButton.png)
- This is a screenshot of clicking on the "buy" button after checking the devtools. In the "Elements" tab, it shows the "onSubmit()" method and the html section of the page. 


## Part2
## Screenshots

![InitialApplication](initialApplication.png)
- This is a screenshot of the initial aplication page.


![GCUHomePage](gcuHomePage.png)
- This is a screenshot of GCU's Home page. When clicking on this button, it takes the user to GCU's acutal home page, so this isn't a page that we created.


![CreateAlbumPage](createAlbumPage.png)
- This is a screenshot of the create album page. In this page, the user inserts the information of an artist, their album, description, year, etc.


![AlbumsListPage](albumsListPage.png)
- This is a screenshot of the albums list page. This list page shows a list of albums titles that are already stored in the application and/or the new ones that the user might add.


![Aboutbox](aboutBox.png)
- This is a screenshot of the about box. Unlike the rest of the screenshots, this isn't a page, it's a box/message that appears at the top that says "My Music Collection Version: 1.0".

## Research Questions 
### Part 1
1. Describe @Input decorator used in info.component.t
2. Describe value used in info.component.html
3. Describe ngModel also used in info.component.html

## Research Answers
1. The @Input() decprator in angular is used to pass data from a parent component to a child component. In info.component.ts, the @input() is applied to the "name" property, allowing the shopcomponent to send the "answer" value to InfoComponent. It allows the InfoComponent to display the name its template. 
2. The value binding in Angular is used to bind the values of a property in the component class to an element's attribute in the template. In info.component.html, the value is used to bind each movie name in the "products" array to the "option" element in the <select> dropdown. 
3. ngmodel is Angular's two-way data binding syntax that synchronizes data between the component and template. It links an input field to a component property, ensuring that when the user updates the input, the component property is automatically updated. 
<br>
## Research Questions
### Part 2
#### Research

1. Add complete comments to music-service.service.ts. Include this commented code in a Microsoft Word document or a text document. Make sure your submission reads like a code file.

## Research Answer
```
// importing needed project & angular modules
import { Injectable } from '@angular/core';

// importing data example for music info
import exampledata from '../../data/sample-music-data.json';

// importing needed models used in service
import { Album } from '../models/Album';
import { Artist } from '../models/Artist';
import { Track } from '../models/Track';

// A service that manages artists, albums, & tracks
// provides methods to retrieve, create, update, & delete music data
@Injectable({ providedIn: 'root' })
export class MusicServiceService {
	// Private arrays to store artist & album data
	private readonly artists: Artist[] = [];
	private readonly albums: Album[] = [];

	// constructor
	constructor() {
		this.createArtists();
		this.createAlbums();
	}

	// Creates & adds artist data to artists array
	// Currently only adds 'The Beatles'
	private createArtists(): void {
		this.artists.push(new Artist(0, 'The Beatles'));
	}

	// Creates albums by filtering example data & adding only those
	// associated with 'The Beatles' to albums array
	
	private createAlbums(): void {
		exampledata.forEach((data: any) => {
			if (data.artist === 'The Beatles') {
				// Map track data to Track objects
				const tracks = data.tracks.map((trackData: any) => new Track(trackData.id, trackData.number, trackData.title, trackData.lyrics, trackData.video));
				// Create & store album
				const album = new Album(data.id, data.title, data.artist, data.description, data.year, data.image, tracks);
				this.albums.push(album);
			}
		});
	}

	/**
     * Retrieves all stored artists
     * @returns An array of Artist objects
     */
	public getArtists(): Artist[] {
		return this.artists;
	}

	/**
     * Retrieves all albums associated with given artist
     * @param artist - Name of artist
     * @returns Array of Album objects
     */
	public getAlbums(artist: string): Album[] {
		return this.albums;
	}

	/**
     * Retrieves specific album based on artist name & album ID
     * @param artist - Name of artist
     * @param id - ID of album
     * @returns Requested Album object or undefined if not found
     */
	public getAlbum(artist: string, id: number): Album | undefined {
		const album = this.albums.find((a) => a.Artist === artist && a.Id === id);

		if (album) {
			// Create copy of album with new Track instances
			const tracks = album.Tracks.map((track) => new Track(track.Id, track.Number, track.Title, track.Lyrics, track.Video));
			return new Album(album.Id, album.Title, album.Artist, album.Description, album.Year, album.Image, tracks);
		}

		return undefined;
	}

	/**
     * Adds new album to albums array
     * @param album - Album object to be added
     */
	public createAlbum(album: Album): void {
		this.albums.push(album);
	}

	/**
     * Updates existing album in albums array
     * @param album - Updated Album object
     */
	public updateAlbum(album: Album): void {
		const index = this.albums.findIndex((a) => a.Id === album.Id);

		if (index !== -1) {
			this.albums.splice(index, 1, album);// Replaces the old album with the new one
		}
	}

	/**
     * Deletes album from albums array based on its ID
     * @param id - ID of album to delete
     * @param artist - Artist associated with album
     */
	public deleteAlbum(id: number, artist: string): void {
		const index = this.albums.findIndex((a) => a.Id === id);

		if (index !== -1) {
			this.albums.splice(index, 1);// Removes the album from the array
		}
	}
}
