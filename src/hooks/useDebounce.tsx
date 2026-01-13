import { useEffect, useState } from "react";

const useDebounce = (searchTxt: string, delay: number) => {
  const [debouncedText, setDebouncedText] = useState(searchTxt);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setDebouncedText(searchTxt);
    }, delay);
    return () => clearTimeout(timeout);
  }, [searchTxt, delay]);

  return debouncedText;
};

export default useDebounce;
