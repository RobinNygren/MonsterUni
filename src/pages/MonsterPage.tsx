import { useParams } from "react-router-dom";

export const MonsterPage = () => {
  const params = useParams<{ monstersId: string }>();

  return (
    <div>
      <h1>MonsterPage {params.monstersId}</h1>
    </div>
  );
};
