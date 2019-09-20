import React from "react";
import styled from "styled-components";

const StyledCharacter = styled.div`
  border: 1px solid black;
  border-radius: 10px;
  padding: 20px;
  margin: 20px 5px;
  color: white;
  background-color: rgba(50, 50, 50, 0.4);
`;

export default function CharacterCard(props) {
  const { name, species, status, imgUrl } = props;
  return (
    <StyledCharacter>
      <div>
        <img src={imgUrl}/>
      </div>
      {name} is a {species}, status: {status}
    </StyledCharacter>
  );
}
