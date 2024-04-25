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
      science: [],
      magic: [],
    },
    origin: "",
    num_eyes: 0,
    num_arms: 0,
    num_horns: 0,
    num_wings: 0,
    num_tentacles: 0,
    num_mouths: 0,
    num_tails: 0,
  });

  const handleChange: React.ChangeEventHandler = (e: React.FormEvent) => {
    const { name, value } = e.target as HTMLInputElement;

    if (name.startsWith("abilities.")) {
      const abilityKey = name.split(".")[1];
      setMonster((prev) => ({
        ...prev,
        abilities: {
          ...prev.abilities,
          [abilityKey]: value.split(",").map((s) => s.trim()),
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
    dispatch(addMonster(monster));
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
        value={monster.abilities.science.join(", ")}
        onChange={handleChange}
        placeholder="Enter science abilities separated by commas"
      />
      <button type="submit">Save Monster</button>
    </form>
  );
};

export default AddMonster;
