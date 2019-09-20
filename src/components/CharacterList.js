import React from "react";
import CharacterCard from "./CharacterCard";
import styled from "styled-components";

const StyledSection = styled.section`
  display: flex;
  justify-content: space-evenly;
  margin-bottom: 50px;
`;

export default function CharacterList(props) {
  const { characterList } = props;
  // TODO: Add useState to track data from useEffect

  // useEffect(() => {
  //   // TODO: Add API Request here - must run in `useEffect`
  //   //  Important: verify the 2nd `useEffect` parameter: the dependancies array!
  // }, []);
  // console.log(characterList);
  return (
    <StyledSection className="character-list">
      <h2>
        {/* TODO: `array.map()` over your state here! */}
        {characterList.map(character => (
          <CharacterCard
            key={character.id}
            name={character.name}
            species={character.species}
            status={character.status}
          />
        ))}
      </h2>
    </StyledSection>
  );
}
