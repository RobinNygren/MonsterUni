import { useReducer } from "react";
import {
  GlobalStateContext,
  initialMonsterState,
} from "../state/GlobalStateContext";
import reducer from "../state/reducer";

type GlobalStateProviderProp = {
  children: React.ReactNode;
};

export const GlobalStateProvider = ({ children }: GlobalStateProviderProp) => {
  const [state, dispatch] = useReducer(reducer, initialMonsterState);
  return (
    <GlobalStateContext.Provider value={{ state, dispatch }}>
      {children}
    </GlobalStateContext.Provider>
  );
};
