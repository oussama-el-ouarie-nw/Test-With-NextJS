import React from "react";
interface PersonProps {
  name: string;
}
const Person = ({ name }: PersonProps) => {
  return <div>Person is {name}</div>;
};

export default Person;
