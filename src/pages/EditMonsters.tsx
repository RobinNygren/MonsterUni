import MyModal from "../components/UI/Modal";

export const EditMonsters = () => {
  return (
    <>
      <MyModal />
      <div className="flex flex-col items-center justify-center p-4 max-w-lg mx-auto gap-4 bg-white shadow-md rounded-lg mt-20">
        EditMonsters
        <p className="text-xl text-red-500">Hello</p>
      </div>
    </>
  );
};

export default EditMonsters;
