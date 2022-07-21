//import App.css
import "./App.css";

//import 3 components
import { SearchBar } from "../SearchBar/SearchBar";
import { SearchResults } from "../SearchResults/SearchResults";
import { Playlist } from "../Playlist/Playlist";
import { useEffect, useState } from "react";
import { TrackList } from "../TrackList/TrackList";
import Spotify from "../../utils/Spotify";

export const App = () => {
  //Hook useState
  const [searchResults, setSearchResults] = useState([])
  const [playlistName, setPlaylistName] = useState('')
  const [playlistTracks, setPlaylistTracks] = useState([])

  useEffect(() => {
    Spotify.getAccessToken()
  }, [])

  //add Track
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

