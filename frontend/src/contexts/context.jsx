import { createContext, useState } from "react";

const GeneralContext = createContext();

function GeneralProvider({ children }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <GeneralContext.Provider
      // eslint-disable-next-line react/jsx-no-constructed-context-values
      value={{
        isOpen,
        setIsOpen,
      }}
    >
      {children}
    </GeneralContext.Provider>
  );
}
const ExportContext = {
  GeneralContext,
  GeneralProvider,
};
export default ExportContext;
