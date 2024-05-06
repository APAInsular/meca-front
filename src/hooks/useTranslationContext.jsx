import { useContext } from "react";
import { TranslationContext } from "../context/TranslationContext";

export default function useTranslationContext() {
    return useContext(TranslationContext);
}
