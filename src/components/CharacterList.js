import React, { useEffect, useState } from "react";

export default function CharacterList(props) {
  const {characterList} = props;
  // TODO: Add useState to track data from useEffect

  useEffect(() => {
    // TODO: Add API Request here - must run in `useEffect`
    //  Important: verify the 2nd `useEffect` parameter: the dependancies array!
  }, []);
  console.log(characterList)
  return (
    <section className="character-list">
      <h2>TODO: `array.map()` over your state here!
        {
          characterList.map((character) => {
            return <p>{character.name}</p>
          })
        }
      </h2>
    </section>
  );
}
