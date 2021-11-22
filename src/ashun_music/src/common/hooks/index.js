import { useState, useEffect } from "react";

export const useLocalStorage = (name) => {
  const [state, setState] = useState(() => {
    return JSON.parse(localStorage.getItem(name));
  });

  useEffect(() => {
    localStorage.setItem(name, JSON.stringify(state));
  }, [state, name]);

  return [state, setState];
};
