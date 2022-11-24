import { useMemo } from "react";

export const usePages = (total) => {
  const pagesArray = useMemo(() => {
    let count = [];
    for (let i = 0; i < total; i++) {
      count.push(i + 1);
    }
    return count;
  }, [total]);
  return pagesArray;
};
