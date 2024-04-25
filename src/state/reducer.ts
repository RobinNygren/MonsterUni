import { Action, GlobalState } from "../types";

const reducer = (state: GlobalState, action: Action): GlobalState => {
  switch (action.type) {
    case "ADD_MONSTERS":
      return {
        ...state,
        monsters: [...state.monsters, action.payload],
      };
    case "REMOVE_MONSTER":
      return {
        ...state,
        monsters: state.monsters.filter(
          (monster) => monster.id !== action.payload.id
        ),
      };
    case "UPDATE_MONSTER":
      return {
        ...state,
        monsters: state.monsters.map((monster) =>
          monster.id === action.payload.id ? action.payload : monster
        ),
      };
    default:
      return state;
  }
};

export default reducer;
