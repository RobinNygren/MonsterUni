import { NavLink, Outlet } from "react-router-dom";
import useCustomContext from "../hooks/useMonster";
import { MonsterContext } from "../components/Context/MonsterContext";
import { Monster, MonsterContextType } from "../types";

export const MonstersPage = () => {
  const { monsters } = useCustomContext<MonsterContextType>(MonsterContext);
  return (
    <div className="flex gap-2">
      <div className="flex flex-col gap-2">
        {monsters.map((monster: Monster) => (
          <NavLink
            key={monster.firstName}
            to={`/monsters/${monster.id}`}
            className={({ isActive }) => {
              return isActive ? "text-blue-500" : "";
            }}
          >
            {monster.firstName} {monster.lastName}
          </NavLink>
        ))}
      </div>
      <Outlet />
    </div>
  );
};
