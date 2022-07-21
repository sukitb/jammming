import './SearchBar.css'

export const SearchBar = (props) => {

  const handleTermChange = (e) => {
    props.onSearch(e.target.value)
  }
  
  return (
    
    <div className="SearchBar">
      <input placeholder="Enter A Song, Album, or Artist"
        onChange={handleTermChange} />
    </div>
  )

}

