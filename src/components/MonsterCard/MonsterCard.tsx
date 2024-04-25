import { useContext, useState, useEffect } from "react";
import { GlobalStateContext } from "../../state/GlobalStateContext";
import { getMonsterImage } from "../../utility/imageLoader";
import { Monster } from "../../types";

type MonsterCardProps = {
  monsterId: string;
};

const MonsterCard: React.FC<MonsterCardProps> = ({ monsterId }) => {
  const { state } = useContext(GlobalStateContext);
  const monster = state.monsters.find((m) => m.id === monsterId);

  const [image, setImage] = useState<string>("");
  useEffect(() => {
    if (monster) {
      getMonsterImage(monster.firstName, monster.lastName).then((img) => {
        setImage(img);
      });
    }
  }, [monster]);

  if (!monster) {
    return <div className="text-center text-gray-500">Monster not found.</div>;
  }

  return (
    <div>
      <img
        src={image}
        alt={`${monster.firstName} ${monster.lastName}`}
        className="w-full h-40 object-cover rounded-t-lg"
      />
      <h2 className="text-xl font-semibold mt-2">
        {monster.firstName} {monster.lastName}
      </h2>
      <p className="text-gray-600 text-sm">{monster.description}</p>
    </div>
  );
};

export default MonsterCard;
