import './Track.css'



export const Track = (props) => {

  const renderAction = () => {
    if (props.isRemoval) {
      return <button className='Track-action'>-</button>
    } else {
      return <button className='Track-action'>+</button>
    }
  };

  return (
    <div class="Track">
      <div className="Track-information">
        {/* <h3><!-- track name will go here --></h3> */}
        {/* <p><!-- track artist will go here--> | <!-- track album will go here --></p> */}
      </div>
      {/* <button className="Track-action"><!-- + or - will go here --></button> */}
    </div>
  )
}

