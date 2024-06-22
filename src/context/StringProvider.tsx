import React, { useState, createContext, useContext, ReactNode, FC, useEffect } from 'react';

// Define the type for the context value
type StringContextType = [number, React.Dispatch<React.SetStateAction<number>>];

// Create the context with an undefined initial value
const StringContext = createContext<StringContextType | undefined>(undefined);

interface StringProviderProps {
   children: ReactNode;
}

const StringProvider: FC<StringProviderProps> = ({ children }) => {
   const [value, setValue] = useState<number>(0);

   useEffect(() => {
      console.warn(`Section Updated: ${value}`);

   }, [value])

   return (
      <StringContext.Provider value={[value, setValue]}>
         {children}
      </StringContext.Provider>
   );
};

// Custom hook for consuming the context
const useStringContext = (): StringContextType => {
   const context = useContext(StringContext);
   if (!context) {
      throw new Error('useStringContext must be used within a StringProvider');
   }
   return context;
};

export { StringProvider, useStringContext };
