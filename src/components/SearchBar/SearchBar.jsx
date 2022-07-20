import './SearchBar.css'

export const SearchBar = () => {
  return (
    <div className="SearchBar">
      <input placeholder="Enter A Song, Album, or Artist" />
      <button className="SearchButton">SEARCH</button>
    </div>
  )
}

