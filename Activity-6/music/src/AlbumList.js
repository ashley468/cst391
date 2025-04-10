import React from "react";
import Card from "./Card";
import { useNavigate } from "react-router-dom";

const AlbumList = (props) => {
  const navigator = useNavigate();

  const handleSelectionOne = (albumId) => {
    console.log('Selected ID is ' + albumId);
    props.updateSingleAlbum(albumId, navigator); // Calling updateSingleAlbum
  };

  console.log('props albumList', props);

  const albums = props.albumList.map((album) => {
    return (
      <Card
        key={album.id}
        albumId={album.id}
        albumTitle={album.title}
        albumDescription={album.description}
        buttonText="OK"
        imgURL={album.image}
        onClick={() => handleSelectionOne(album.id)} // Use onClick to trigger handleSelectionOne
      />
    );
  });

  return <div className='container'>{albums}</div>;
};

export default AlbumList;
