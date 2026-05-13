import type {UsersState} from './type.ts';
import React from 'react';
export const Context = React.createContext<UsersState | undefined>(undefined)