type MonsterAbility = {
  science: string;
  magic: string;
};

type MonsterAttributes = {
  wings: number;
  horns: number;
  tentacles: number;
  eyes: number;
  arms: number;
  tails: number;
};

type Monster = {
  id: string;
  firstName: string;
  lastName: string;
  description: string;
  abilities: MonsterAbility;
  origin: string;
  physicalAttributes: MonsterAttributes;
};

type MonsterContextType = {
  monsters: Monster[];
  setMonsters: (monsters: Monster[]) => void;
};

type Action =
  | { type: "ADD_MONSTERS"; payload: Monster }
  | { type: "REMOVE_MONSTER"; payload: Monster }
  | { type: "UPDATE_MONSTER"; payload: Monster };

type GlobalState = {
  monsters: Monster[];
};

export type { Monster, MonsterContextType, Action, GlobalState };
