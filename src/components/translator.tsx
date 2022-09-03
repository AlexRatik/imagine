import styled from "styled-components";
import { useAppDispatch, useAppSelector } from "../hooks/storeHooks";
import { Select } from "./select/select";
import { setLanguage, TranslatorType } from "../features/translatorSlice";

const StyledTranslator = styled.div`
  position: relative;
`;

export function Translator() {
  const { language } = useAppSelector((store) => store.translator);
  const dispatch = useAppDispatch();

  return (
    <StyledTranslator>
      <Select
        values={["ENG", "RUS"]}
        selectedValue={language}
        name="translator"
        width={58}
        height={27}
        onSelect={(value: string) =>
          dispatch(setLanguage(value as TranslatorType))
        }
      />
    </StyledTranslator>
  );
}
