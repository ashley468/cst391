import React, { useState, useEffect } from "react";
import "./App.css";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import SearchAlbum from "./SearchAlbum";
import NavBar from "./NavBar";
import NewAlbum from "./NewAlbum";
import OneAlbum from "./OneAlbum";
import dataSource from "./dataSource";

const App = (props) => {
  const [searchPhrase, setSearchPhrase] = useState('');
  const [albumList, setAlbumList] = useState([]);

  let refresh = false;

  const updateSearchResults = (phrase) => {
    console.log('phrase is ' + phrase);
    setSearchPhrase(phrase);
  };

  useEffect(() => {
    loadAlbums();
  }, [refresh]);

  const loadAlbums = async () => {
    try {
      const response = await dataSource.get('/albums');
      console.log('Albums fetched:', response.data); // Debug log
      setAlbumList(response.data);
    } catch (error) {
      console.error("Error fetching albums:", error);
    }
  };

  const updateSingleAlbum = (id, navigate) => {
    console.log('Update Single Album = ', id);
    var indexNumber = 0;
    for (var i = 0; i < albumList.length; i++) {
      if (albumList[i].id === id) indexNumber = i;
    }
    navigate('/show/' + indexNumber);
  };

  const renderedList = albumList.filter((album) => {
    if (album.description.toLowerCase().includes(searchPhrase.toLocaleLowerCase()) || searchPhrase === '') {
      return true;
    }
    return false;
  });

  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route
          exact
          path='/'
          element={
            <SearchAlbum
              updateSearchResults={updateSearchResults}
              albumList={renderedList}
              updateSingleAlbum={updateSingleAlbum}
            />
          }
        />
        <Route exact path='/new' element={<NewAlbum />} />
        <Route exact path='/show/:albumId' element={<OneAlbum albumList={albumList} />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
