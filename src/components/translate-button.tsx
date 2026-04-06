import { useTranslation } from "@refinedev/core";

const TranslateButton = () => {
  const { changeLocale, getLocale } = useTranslation();

  return (
    <select
      value={getLocale()}
      onChange={(e) => changeLocale(e.target.value)}
    >
      <option value="en">English</option>
      <option value="ph">Filipino</option>
      <option value="fr">French</option>
    </select>
  );
};

export default TranslateButton