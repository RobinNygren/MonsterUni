import { createContext } from "react";
import { Action, GlobalState, Monster } from "../types";

export const initialMonsterState = {
  monsters: [] as Monster[],
};

export const GlobalStateContext = createContext<{
  state: GlobalState;
  dispatch: React.Dispatch<Action>;
}>({
  state: initialMonsterState,
  dispatch: () => null,
});
