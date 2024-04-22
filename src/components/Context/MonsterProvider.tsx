import { ReactNode, useState } from "react";
import { MonsterContext, defaultContextValue } from "./MonsterContext";

const MonsterProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [monsters, setMonsters] = useState(defaultContextValue.monsters);
  return (
    <MonsterContext.Provider value={{ monsters, setMonsters }}>
      {children}
    </MonsterContext.Provider>
  );
};

export default MonsterProvider;
