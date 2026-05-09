import React from "react";
import type { User } from "./type";

interface ToDoContextType {
  users: User[];
  remove: (id: number) => void;
  pass: (id: number) => void;
  unpass: (id: number) => void;
  removeAll: () => void;
  passAll: () => void;
  unpassAll: () => void;
  add: (title: string) => void;
}

export const ToDo = React.createContext<ToDoContextType | undefined>(undefined);