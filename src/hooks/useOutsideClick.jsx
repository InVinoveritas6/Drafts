import {useEffect} from "react";

export function useOutsideClick(ref, clickOutside, exception) {
	useEffect(() => {
	  function handleClickOutside(event) {
		if (ref.current && !ref.current.contains(event.target)) {
			if (!exception) {
				clickOutside(false);
			}
		}
	  }
	  document.addEventListener("mousedown", handleClickOutside);
	  return () => {
		document.removeEventListener("mousedown", handleClickOutside);
	  };
	}, [ref, exception]);
  }