import React from "react";
import CharacterCard from "./CharacterCard";
import styled from "styled-components";
import SearchForm from './SearchForm'

const StyledDiv = styled.div`
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
    <section>
      <SearchForm />
      <StyledDiv className="character-list">
        <h2>
          {/* TODO: `array.map()` over your state here! */}
          {characterList.map(character => (
            <CharacterCard
              key={character.id}
              name={character.name}
              species={character.species}
              status={character.status}
              imgUrl={character.image}
            />
          ))}
        </h2>
      </StyledDiv>
    </section>
  );
}
