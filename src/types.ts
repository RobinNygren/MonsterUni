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

export type { Monster, MonsterContextType };
