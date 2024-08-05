import { useState } from "react";
import "./character.css";
const Character = ({ character }) => {
  const [turned, setTurned] = useState(false);

  return (
    <div>
      <img className={turned ? "turned" : "image"} src={character.image} alt={character.name} onClick={() => setTurned(!turned)} />
    </div>
  );
};

export default Character;