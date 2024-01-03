import { initReactI18next } from "react-i18next";
import i18n from "i18next";

export const defaultNS = "en";
export const resources = {} as const;

i18n.use(initReactI18next).init({
  lng: "en",
  ns: ["chi", "en", "vie"],
  defaultNS,
  resources,
});
