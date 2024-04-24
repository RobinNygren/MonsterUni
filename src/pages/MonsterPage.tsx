import { useParams } from "react-router-dom";
import MonsterList from "../components/MonsterList/MonsterList";

export const MonsterPage = () => {
  const { monsterId } = useParams<{ monsterId?: string }>();

  if (!monsterId) {
    return <p>No monster selected or incorrect monster ID.</p>;
  }

  return (
    <>
      <div>
        <MonsterList monsterId={monsterId} />
      </div>
    </>
  );
};
