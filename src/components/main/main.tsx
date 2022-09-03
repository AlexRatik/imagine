import styled from "styled-components";
import { Select } from "../select/select";
import { useAppDispatch, useAppSelector } from "../../hooks/storeHooks";
import { CategoryType, setCategory } from "../../features/translatorSlice";
import { Search } from "../search/search";
import { Container } from "../container/container";

const categories = [
  "Sculpture",
  "Architecture",
  "Landscape",
  "Graphic arts",
  "Portrait",
];

const StyledTitleContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  margin-bottom: 85px;
  h2,
  p {
    font-size: 50px;
    line-height: 120%;
    letter-spacing: -0.02em;
    font-style: normal;
    font-weight: 400;
  }
`;

const StyledMain = styled.main`
  padding: 166px 255px 0;
`;

export function Main() {
  const { category } = useAppSelector((store) => store.translator);
  const dispatch = useAppDispatch();

  return (
    <StyledMain>
      <StyledTitleContainer>
        <h2>Artworks</h2>
        <p>588</p>
      </StyledTitleContainer>
      <Container width={600}>
        <Select
          values={categories}
          selectedValue={category}
          name="category"
          width={258}
          maxWidth={266}
          height={27}
          onSelect={(value: string) =>
            dispatch(setCategory(value as CategoryType))
          }
        />
        <Search height={27} width={278} inputHeight={50} title="Name" />
      </Container>
    </StyledMain>
  );
}
