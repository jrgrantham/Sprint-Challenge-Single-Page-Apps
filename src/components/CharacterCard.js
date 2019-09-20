import React from "react";

export default function CharacterCard(props) {
  const {name, species, status} = props;
  return (<p>{name} is a {species}, status: {status}</p>);
}
