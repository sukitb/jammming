import './TrackList.css'
import { Track } from '../Track/Track';

export const TrackList = (props) => {
  // check props
  const tracks = props.tracks || [];
  

  return (
    <div className="TrackList">
      {tracks.map(track => {
          return (
            <Track track={track} key={track.id} onAdd={props.onAdd} onRemove={props.onRemove} isRemoval={props.isRemoval} />
          )
        })}
    </div>
  )
}