import { NavLink, Outlet, useNavigate } from "react-router-dom";
import { useContext, useState, useEffect } from "react";
import { GlobalStateContext } from "../state/GlobalStateContext";
import { Monster } from "../types";
import MyModal from "../components/UI/Modal";
import { getMonsterImage } from "../utility/imageLoader";

export const MonstersPage = () => {
  const { state } = useContext(GlobalStateContext);
  const { monsters } = state;
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedMonster, setSelectedMonster] = useState<Monster | null>(null);
  const [image, setImage] = useState("");

  useEffect(() => {
    if (selectedMonster) {
      getMonsterImage(selectedMonster.firstName, selectedMonster.lastName)
        .then(setImage)
        .catch((error) => console.error("Error loading image: ", error));
    }
  }, [selectedMonster]);

  const handleMonsterClick = (monster: Monster, event: React.MouseEvent) => {
    setSelectedMonster(monster);
    setIsModalOpen(true);
  };

  return (
    <div className="flex gap-2">
      <div className="flex flex-col gap-2">
        {monsters.map((monster: Monster) => (
          <div key={monster.id} className="flex items-center justify-between">
            <NavLink
              key={monster.firstName}
              to={`/monsters/${monster.id}`}
              className={({ isActive }) => {
                return isActive ? "text-blue-500" : "";
              }}
              onClick={(event) => {
                handleMonsterClick(monster, event);
              }}
            >
              {monster.firstName} {monster.lastName}
            </NavLink>
            <button
              onClick={(event) => handleMonsterClick(monster, event)}
              className="ml-2"
            >
              📷
            </button>
          </div>
        ))}
      </div>
      <Outlet />
      {selectedMonster && (
        <MyModal
          isOpen={isModalOpen}
          onClose={() => {
            setIsModalOpen(false);
          }}
          content={{
            title: `${selectedMonster.firstName} ${selectedMonster.lastName}`,
            description: selectedMonster.description,
            image: image,
          }}
        />
      )}
    </div>
  );
};
