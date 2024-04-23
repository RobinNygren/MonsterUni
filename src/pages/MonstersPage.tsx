import { NavLink, Outlet } from "react-router-dom";

export const MonstersPage = () => {
  const monsters = [1, 2, 3, 4, 5];
  return (
    <div className="flex gap-2">
      <div className="flex flex-col gap-2">
        {monsters.map((monster) => (
          <NavLink
            key={monster}
            to={`/monsters/${monster}`}
            className={({ isActive }) => {
              return isActive ? "text-blue-500" : "";
            }}
          >
            Monster {monster}
          </NavLink>
        ))}
      </div>
      <Outlet />
    </div>
  );
};
