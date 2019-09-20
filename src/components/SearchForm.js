import React, { useState } from "react";

const initialSearch = '';

export default function SearchForm(props) {
  
  const [searchName, setSearchName] = useState('');
  
  const onSearchNameChange = e => {
    setSearchName(e.target.value);
  }
  
  // const onSearh = e => {
  //   e.preventDefault();
  //   const 
  // }
 
  return (
    <section className="search-form">
      <form>
        <label htmlFor='nameInput'>Name</label>
        <input id='nameInput' type='text'/>
      </form>
      <button>Seacrh</button>
    </section>
  );
}


