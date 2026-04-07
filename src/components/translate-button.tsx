import { useTranslation } from "react-i18next";
import { useEffect, useState } from "react";

const TranslateButton = () => {
  const { i18n } = useTranslation();
  const [lang, setLang] = useState(i18n.language);

  useEffect(() => {
    const onChange = (lng: string) => setLang(lng);

    i18n.on("languageChanged", onChange);
    return () => {
      i18n.off("languageChanged", onChange);
    };
  }, [i18n]);

  return (
    <div className="relative inline-block">
      <select
        value={lang}
        onChange={(e) => i18n.changeLanguage(e.target.value)}
        className="appearance-none px-4 py-2 pr-10 rounded-2xl backdrop-blur-md bg-white/10 border border-white/20 text-sm font-medium shadow-lg"
      >
        <option value="en">English</option>
        <option value="ph">Filipino</option>
        <option value="fr">French</option>
      </select>
    </div>
  );
};

export default TranslateButton;