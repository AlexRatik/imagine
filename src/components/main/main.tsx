import styled from "styled-components";
import { Select } from "../select/select";
import { useAppDispatch, useAppSelector } from "../../hooks/storeHooks";
import { CategoryType, setCategory } from "../../features/appSlice";
import { Search } from "../search/search";
import { Container } from "../container/container";
import { Cards } from "../cards/cards";
import { Pagination } from "../pagination/pagination";

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
  flex-wrap: wrap;
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
  @media (max-width: 1400px) {
    margin-bottom: 35px;
  }
  @media (max-width: 640px) {
    margin-bottom: 15px;
    h2,
    p {
      font-size: 32px;
    }
  }
`;

const StyledMain = styled.main`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  transition: padding 0.25s ease-in-out;
  padding: 166px 255px 150px;
  @media (max-width: 1400px) {
    padding: 83px 125.5px 104px;
  }
  @media (max-width: 1240px) {
    padding-bottom: 35px;
    padding-top: 45px;
  }
  @media (max-width: 640px) {
    padding: 40px 50px 15px;
  }
  @media (max-width: 400px) {
    padding: 10px 15px 5px;
  }
`;

export function Main() {
  const { category } = useAppSelector((store) => store.app);
  const dispatch = useAppDispatch();

  return (
    <StyledMain>
      <StyledTitleContainer>
        <h2>Artworks</h2>
        <p>588</p>
      </StyledTitleContainer>
      <Container width={565} gap={16}>
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
      <Cards />
      <Pagination />
    </StyledMain>
  );
}
