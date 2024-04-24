import useCustomContext from "../../hooks/useMonster";
import { MonsterContext } from "../Context/MonsterContext";
import { Monster, MonsterContextType, MonsterListProps } from "../../types";

const MonsterList = ({ monsterId }: MonsterListProps) => {
  const { monsters } = useCustomContext<MonsterContextType>(MonsterContext);
  const monster = monsters?.find((m) => m.id === monsterId);

  return (
    <div>
      {monster ? (
        <ul>
          <li>
            <h3>
              {monster.firstName} {monster.lastName}
            </h3>
            <p>Description: {monster.description}</p>
            <p>
              Abilities: Science - {monster.abilities.science}, Magic -{" "}
              {monster.abilities.magic}
            </p>
            <p>Origin: {monster.origin}</p>
          </li>
        </ul>
      ) : (
        <p>Monster not found.</p>
      )}
    </div>
  );
};

export default MonsterList;
