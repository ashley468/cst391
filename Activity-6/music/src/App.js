import React, { useState, useEffect } from 'react';
import Card from './Card';
import SearchForm from "./SearchForm";
import './App.css';
import albums from './albums.json';

const App = () => {
    const [searchPhrase, setSearchPhrase] = useState('');
    const [albumList, setAlbumList] = useState([]);

    useEffect(() => {
        setAlbumList(albums);
    }, []);

    const updateSearchResults = (phrase) => {
        console.log('Search phrase:', phrase);
        setSearchPhrase(phrase);
    };

    const filteredAlbums = albumList.filter(album =>
        album.title.toLowerCase().includes(searchPhrase.toLowerCase())
    );

    const renderedList = () => {
        return albumList.map((album) => {
            if(
                album.description.toLowerCase().includes(searchPhrase.toLowerCase()) || searchPhrase === ''
            )
            return(
                <Card 
                key={album.artistId} 
                albumtitle={album.title} 
                albumdescription={album.description} 
                buttontext="OK" 
                imageurl={album.image} 
            />
            );
            else console.log('Does not match ' + searchPhrase);

    });
    };

    return (
        <div>
            <div className='container'>
                <SearchForm onSubmit={updateSearchResults} />
            </div>
            <div className='container'>{renderedList()}</div>
        </div>
    );
};

export default App;
