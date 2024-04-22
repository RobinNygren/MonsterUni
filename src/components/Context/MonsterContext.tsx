import { createContext } from "react";
import { MonsterContextType } from "../../types";
import monstersData from "../../data/monsters.json";
import { v4 as uuidv4 } from "uuid";

export const defaultContextValue: MonsterContextType = {
  monsters: monstersData.map((monster) => ({ ...monster, id: uuidv4() })),
  setMonsters: () => {},
};

export const MonsterContext = createContext<MonsterContextType | undefined>(
  defaultContextValue
);
