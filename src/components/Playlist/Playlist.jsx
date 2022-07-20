import './Playlist.css'
import { TrackList } from "../TrackList/TrackList"

export const Playlist = () => {
  return (
    <div className="Playlist">
      <input value={'New Playlist'} />
      <TrackList />
      <button className="Playlist-save">SAVE TO SPOTIFY</button>
    </div>
  )
}

