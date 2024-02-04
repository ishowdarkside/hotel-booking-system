import { useEffect, useRef } from "react";

export function useCloseModal(fn: (val: boolean) => void) {
  const ref = useRef();

  useEffect(() => {
    function handleClick(e: Event) {
      if (ref.current && !ref.current.contains(e.target)) fn();
    }

    document.addEventListener("click", handleClick, true);

    return () => document.removeEventListener("click", handleClick, true);
  }, []);

  return ref;
}
