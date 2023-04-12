import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { BsFillSunFill, BsMoonStarsFill } from "react-icons/bs";

import { setTheme } from "../../redux/theme/themeSlice";
import { Ball, Checkbox, Label, Switcher } from "./ThemeBtn.styled";

export const ThemeSwitcher = () => {
  const dispatch = useDispatch();
  const [mode, setMode] = useState("dark");

  const toggleTheme = () => {
    const newTheme = mode === "light" ? "dark" : "light";
    setMode(newTheme);
  };

  useEffect(() => {
    dispatch(setTheme({ mode }));
  }, [dispatch, mode]);

  return (
    <Switcher>
      <Checkbox
        type="checkbox"
        checked={mode === "dark"}
        id="theme-switcher"
        onChange={toggleTheme}
      />

      <Label htmlFor="theme-switcher">
        <BsFillSunFill />
        <BsMoonStarsFill />
        <Ball />
      </Label>
    </Switcher>
  );
};
