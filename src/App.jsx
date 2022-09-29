import React from "react";
import PersonCard from "./components/PersonCard";

const App = () => {
  return (
    <div>
      <PersonCard
        firstName="Mikey"
        lastName="Navarro"
        age={45}
        hairColor="Brown"
      />
      <PersonCard
        firstName="Ben"
        lastName="Watson"
        age={15}
        hairColor="Brown"
      />
      <PersonCard
        firstName="Tommy"
        lastName="Caulfield"
        age={25}
        hairColor="Brown"
      />
    </div>
  );
};

export default App;
