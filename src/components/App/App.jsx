//import App.css
import "./App.css";

//import 3 components
import { SearchBar } from "../SearchBar/SearchBar";
import { SearchResults } from "../SearchResults/SearchResults";
import { Playlist } from "../Playlist/Playlist";
import { useEffect, useState } from "react";
import Spotify from "../../utils/Spotify";
import blackpink from './blackpink.webm'

export const App = () => {
  //Hook useState
  const [searchResults, setSearchResults] = useState([])
  const [playlistName, setPlaylistName] = useState('')
  const [playlistTracks, setPlaylistTracks] = useState([])

  //Hook useEffect
  useEffect(() => {
    Spotify.getAccessToken()
  }, [])

  //Add Track
  const addTrack = (track) => {
    if (playlistTracks.find(prev => prev.id === track.id)) {
      return;
    }

    // Add new track to lasted
    setPlaylistTracks([...playlistTracks, track]);
  }

  //Remove track
  const removeTrack = (track) => {
    setPlaylistTracks(playlistTracks.filter((prev) => prev.id !== track.id));
  }

  //Update playlist name
  const updatePlaylistName = (name) => {
    setPlaylistName(name);
  }

  //savePlaylist
  const savePlaylist = () => {
    const trackURIs = playlistTracks.map((track) => track.uri)
    Spotify.savePlaylist(playlistName, trackURIs).then(() => {
      setPlaylistName('New Playlist');
      setPlaylistTracks([]);
    })
  }


  const search = (term) => {
    Spotify.search(term).then((tracks) => {
      setSearchResults(tracks);
    })
  }

  return (
    <div>
      <video autoPlay loop muted className="video-background" src={blackpink} >
      </video>
      <h1>
        Ja<span className="highlight">mmm</span>ing
      </h1>

      <div className="App">
        <SearchBar onSearch={search} />
        <div className="App-playlist">
          <SearchResults searchResults={searchResults}
            onAdd={addTrack} />
          <Playlist playlistName={playlistName}
            playlistTracks={playlistTracks}
            onRemove={removeTrack}
            onNameChange={updatePlaylistName}
            onSave={savePlaylist} />
        </div>
      </div>
    </div>

  );
};

