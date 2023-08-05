

const Search = ({ searchText, onChange,onInput }) => {

  return <>
  <input style={{
    "display":"flex"
  }}  type="text" value={searchText} onChange={onChange} onInput={onInput} /> 
 
  </>
}

export default Search
