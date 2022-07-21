import './Playlist.css'
import { TrackList } from "../TrackList/TrackList"

export const Playlist = (props) => {

  const handleNameChange = (e) => {
    props.onNameChange(e.target.value)
  }

  return (
    <div className="Playlist">
      <input value={'New Playlist'} 
      onChange={handleNameChange} />
      <TrackList tracks={props.playlistTracks} 
                 onRemove={props.onRemove} 
                 isRemoval={true}/>
      <button className="Playlist-save" 
              onClick={props.onSave}>
              SAVE TO SPOTIFY</button>
    </div>
  )
}

