import { useEffect, useRef } from "react";

export function useOutsideClose(handler) {
  const ref = useRef();
  useEffect(function () {
    function OutsideClick(e) {
      if (ref.current && !ref.current.contains(e.target)) {
        handler();
      }
    }
    document.addEventListener("click", OutsideClick, true);
    return () => document.removeEventListener("click", OutsideClick);
  });
  return ref;
}
