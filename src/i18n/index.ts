import LocalizedStrings from "react-native-localization";

import en from "./locales/en.json"; // English
import ja from "./locales/ja.json"; // Japanese

export const LocalizedString = new LocalizedStrings({
  "en-US": en,
  ja
});
