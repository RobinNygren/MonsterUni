import { Link, useRouteError } from "react-router-dom";

type CustomError = {
  statusText: string;
  message: string;
};

export const NotFoundPage = () => {
  const error = useRouteError() as CustomError | Error;
  return (
    <div className="flex flex-col items-center justify-center p-4 max-w-lg mx-auto gap-4 bg-white shadow-md rounded-lg mt-20">
      <h1 className="text-3xl font-bold text-gray-800">Oops!</h1>
      <p className="text-xl text-red-500">404 Not Found</p>
      <p className="italic text-gray-600">
        <i>
          {(error as CustomError).statusText || (error as CustomError).message}
        </i>
      </p>
      <Link
        to="/"
        className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors duration-200 ease-in-out"
      >
        Go to Home
      </Link>
    </div>
  );
};
