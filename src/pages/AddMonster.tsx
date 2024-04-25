import { useContext, useState } from "react";
import { GlobalStateContext } from "../state/GlobalStateContext";
import { Action } from "../types";
import { v4 as uuidv4 } from "uuid";

const AddMonster = () => {
  const { dispatch } = useContext(GlobalStateContext);
  const [monster, setMonster] = useState({
    id: uuidv4(),
    firstName: "",
    lastName: "",
    description: "",
    abilities: {
      science: "",
      magic: "",
    },
    origin: "",
    physicalAttributes: {
      wings: 0,
      horns: 0,
      tentacles: 0,
      eyes: 0,
      arms: 0,
      tails: 0,
    },
  });

  const handleChange: React.ChangeEventHandler = (e: React.FormEvent) => {
    const { name, value } = e.target as HTMLInputElement;

    if (name.startsWith("abilities.")) {
      const abilityKey = name.split(".")[1];
      setMonster((prev) => ({
        ...prev,
        abilities: {
          ...prev.abilities,
          [abilityKey]: value,
        },
      }));
    } else {
      setMonster((prev) => ({
        ...prev,
        [name]: value,
      }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    dispatch({ type: "ADD_MONSTERS", payload: monster });
  };
  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="firstName"
        value={monster.firstName}
        onChange={handleChange}
      />
      <textarea
        name="abilities.science"
        value={monster.abilities.science}
        onChange={handleChange}
        placeholder="Enter science abilities separated by commas"
      />
      <button type="submit">Save Monster</button>
    </form>
  );
};

export default AddMonster;
