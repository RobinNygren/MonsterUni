import useCustomContext from "../../hooks/useMonster";
import { MonsterContext } from "../Context/MonsterContext";
import { Monster, MonsterContextType } from "../../types";

const MonsterList = () => {
  const { monsters } = useCustomContext<MonsterContextType>(MonsterContext);

  return (
    <div>
      <h2>Monster List</h2>
      <ul>
        {monsters.map((monster: Monster) => (
          <li key={monster.id}>{monster.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default MonsterList;
