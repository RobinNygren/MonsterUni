type Monster = {
  id: string;
  name: string;
};

type MonsterContextType = {
  monsters: Monster[];
  setMonsters: (monsters: Monster[]) => void;
};

export type { Monster, MonsterContextType };
