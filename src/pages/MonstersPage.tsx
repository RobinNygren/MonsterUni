import { NavLink, Outlet } from "react-router-dom";
import { useContext } from "react";
import { GlobalStateContext } from "../state/GlobalStateContext";
import { Monster } from "../types";

export const MonstersPage = () => {
  const { state } = useContext(GlobalStateContext);
  const { monsters } = state;
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
