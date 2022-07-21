import './SearchBar.css'

export const SearchBar = (props) => {

  const handleTermChange = (e) => {
    props.onSearch(e.target.value)
  }

  // ข้อ 69 ไม่เข้าใจ
  // ไม่ต้องใช้ปุ่ม กดปุ้บมาปั้บ
  

  return (
    <div className="SearchBar">
      <input placeholder="Enter A Song, Album, or Artist"
        onChange={handleTermChange} />
      <button className="SearchButton" >SEARCH</button>
    </div>
  )

}

