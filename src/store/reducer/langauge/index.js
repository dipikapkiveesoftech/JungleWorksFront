import { MainTextEnglish, MainTextKorean, MainTextJapanese, } from "../../../utils/LanguageConst";
import { LANGAUGE_CONST } from "../../constraint";

const INITIAL_STATE = {
  languageData: MainTextEnglish,
  language: "english",
};

export default (states = INITIAL_STATE, action) => {
  let languageData = INITIAL_STATE.languageType;
  let language = INITIAL_STATE.language;
  // Langauge
  if (action.type === LANGAUGE_CONST) {
    try {
      let selectedLangauge = action.payload;
      language = selectedLangauge
      if (selectedLangauge === "japanese") {
        languageData = MainTextJapanese;
         
      }
      else if (selectedLangauge === "korean") {
        languageData = MainTextKorean;
      }
      else {
        languageData = MainTextEnglish;
      }
    } catch (error) { }
  }

  switch (action.type) {
    case LANGAUGE_CONST:
      return {
        ...states,
        languageData: languageData,
        language: language,
      };

    default:
      return states;
  }
};
