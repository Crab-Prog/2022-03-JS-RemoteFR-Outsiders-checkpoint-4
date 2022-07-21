import { createContext, useState } from "react";

const GeneralContext = createContext();

function GeneralProvider({ children }) {
  const [isOpen, setIsOpen] = useState(false);
  const [infoUser, setInfoUser] = useState({
    username: sessionStorage.getItem(`username`),
    isAdmin: sessionStorage.getItem(`isAdmin`),
  });

  const [isUpdate, setIsUpdate] = useState(false);

  return (
    <GeneralContext.Provider
      // eslint-disable-next-line react/jsx-no-constructed-context-values
      value={{
        isOpen,
        setIsOpen,
        infoUser,
        setInfoUser,
        isUpdate,
        setIsUpdate,
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
