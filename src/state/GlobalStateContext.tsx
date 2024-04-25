import { createContext } from "react";
import { Action, GlobalState, Monster } from "../types";
import monstersData from "../data/monsters.json";
import { v4 as uuidv4 } from "uuid";

type PreIdMonster = Partial<Monster>;

export const initialMonsters: Monster[] = monstersData.map(
  (monster: PreIdMonster) => ({
    ...monster,
    id: uuidv4(),
  })
) as Monster[];

export const initialMonsterState: GlobalState = {
  monsters: initialMonsters,
};

export const GlobalStateContext = createContext<{
  state: GlobalState;
  dispatch: React.Dispatch<Action>;
}>({
  state: initialMonsterState,
  dispatch: () => null,
});
