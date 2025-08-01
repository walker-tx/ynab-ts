
import React from "react";

import { YnabCore } from "../core.js";

const YnabContext = React.createContext<YnabCore | null>(null);

export function YnabProvider(props: { client: YnabCore, children: React.ReactNode }): React.ReactNode { 
  return (
    <YnabContext.Provider value={props.client}>
      {props.children}
    </YnabContext.Provider>
  );
}

export function useYnabContext(): YnabCore { 
  const value = React.useContext(YnabContext);
  if (value === null) {
    throw new Error("SDK not initialized. Create an instance of YnabCore and pass it to <YnabProvider />.");
  }
  return value;
}
