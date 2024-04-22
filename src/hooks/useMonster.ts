import { useContext, Context } from "react";

const useCustomContext = <T>(context: Context<T | undefined>) => {
  const contextValue = useContext(context);
  if (!contextValue) {
    throw new Error("useCustomContext must be used within a Provider");
  }
  return contextValue;
};

export default useCustomContext;
