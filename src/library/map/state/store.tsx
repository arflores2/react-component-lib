import React, { createContext, PropsWithChildren, useReducer } from "react";
import { MapAction } from "./actions";
import { MapState, defaultState, mapReducer } from './reducers';

export const Store = ({children}: PropsWithChildren<{}>) => {
    const [state, dispatch] = useReducer(mapReducer, defaultState);
    return (
        <Context.Provider value={[ state, dispatch ]}>
            {children}
        </Context.Provider>
    )
};
type ContextValue = [ MapState, React.Dispatch<MapAction> | null];
export const Context = createContext<ContextValue>([defaultState, null]);