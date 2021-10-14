import React from 'react'
import "./searchbox.style.scss"

const SearchBox = ({placeholder, handleChange}) => {
    return ( 
        <input type="search" className="search" placeholder={placeholder} onChange={handleChange}  />
     );
}
 
export default SearchBox;