//import App.css
import "./App.css";

//import 3 components
import { SearchBar } from "../SearchBar/SearchBar";
import { SearchResults } from "../SearchResults/SearchResults";
import { Playlist } from "../Playlist/Playlist";
import { useState } from "react";
import { TrackList } from "../TrackList/TrackList";

const searchResultsInit = [{
  name: 'test1', artist: 'test1', album: 'test1', id: 'test1'
},
{
  name: 'test2', artist: 'test2', album: 'test2', id: 'test2'
}]

const playlistNameInit = 'my playlist'

const playlistTracksInit = [{
  name: 'test3', artist: 'test3', album: 'test3', id: 'test3'
}]

export const App = () => {
  //Hook useState
  const [searchResults, setSearchResults] = useState(searchResultsInit)
  const [playlistName, setPlaylistName] = useState(playlistNameInit)
  const [playlistTracks, setPlaylistTracks] = useState(playlistTracksInit)

  //add Track
  const addTrack = (track) => {
    if (playlistTracks.find(prev => prev.id === track.id)) {
      return;
      // return alert(`Alert if prev's id is same as track's id`);
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
    const trackURIs = playlistTracks.map()
  }

  const seacrch = (term) => {
    console.log(term)
  }

  return (
    <div>
      <h1>
        Ja<span className="highlight">mmm</span>ing
      </h1>
      <div className="App">
        <SearchBar onSearch={seacrch} />
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

