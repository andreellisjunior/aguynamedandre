import { useTheme } from "next-themes";
import Image from "next/image";
import { useEffect, useState } from "react";
import Moon from "../../../public/Moon.svg";
import Sun from "../../../public/Sun.svg";

const DarkModeToggle = () => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  // useEffect only runs on the client, so now we can safely show the UI
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  function checkTheme() {
    if (theme === "dark") {
      return setTheme("light");
    }
    if (theme === "light") {
      return setTheme("dark");
    }
  }

  return (
    <span className="mx-4">
      <button onClick={checkTheme}>
        {theme === "dark" ? (
          <Image src={Sun} alt="sun" />
        ) : (
          <Image src={Moon} alt="moon" />
        )}
      </button>
    </span>
  );
};

export default DarkModeToggle;
