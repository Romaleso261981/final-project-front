import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import sprite from "../../assets/image/icons_sprite.svg";
import { Ball, Checkbox, Label, Switcher, FlagSvg } from "./LangBtn.styled";
import { setLanguage } from "../../redux/lang/langSlice";

export const LangSwitcher = () => {
  const dispatch = useDispatch();
  const [lang, setLang] = useState("en");

  const toggleLang = () => {
    const newLang = lang === "en" ? "ua" : "en";
    setLang(newLang);
  };

  useEffect(() => {
    dispatch(setLanguage({ lang }));
  }, [dispatch, lang]);

  return (
    <Switcher>
      <Checkbox
        type="checkbox"
        checked={lang === "en"}
        id="lang-switcher"
        onChange={toggleLang}
      />

      <Label htmlFor="lang-switcher">
        <FlagSvg>
          <use href={sprite + `#united-kingdom`} />
        </FlagSvg>
        <FlagSvg>
          <use href={sprite + `#ukraine`} />
        </FlagSvg>

        <Ball />
      </Label>
    </Switcher>
  );
};
