import { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../hooks/storeHooks";
import { PaginationItem } from "./paginationItem";
import styled from "styled-components";
import { v4 as uuidv4 } from "uuid";
import { setCurrentPage } from "../../features/paginationSlice";
import { Subscription } from "./subscription";

const StyledPaginationContainer = styled.div`
  display: flex;
  float: right;
  margin-left: auto;
  align-items: center;
  column-gap: 2.5rem;
`;

const StyledPagination = styled.div`
  display: flex;
  width: 414px;
  div:first-child:before,
  div:last-child:before,
  div:first-child:after,
  div:last-child:after {
    content: "";
    position: absolute;
    background-color: #000000;
    width: 15px;
    height: 2px;
  }
  div:first-child:before {
    top: 21.5px;
    left: 20px;
    transform: rotate(135deg);
  }
  div:first-child:after {
    transform: rotate(-135deg);
    top: 32px;
    left: 20px;
  }
  div:last-child:before {
    right: 20px;
    top: 21.5px;
    transform: rotate(225deg);
  }
  div:last-child:after {
    top: 32px;
    right: 20px;
    transform: rotate(135deg);
  }
`;

export function Pagination() {
  const { currentPage, maxPage, minPage } = useAppSelector(
    (store) => store.pagination
  );
  const dispatch = useAppDispatch();

  const [visiblePageNumbers, setVisiblePageNumbers] = useState<
    (number | string)[]
  >([]);
  useEffect(() => {
    let arr = [];
    if (maxPage - currentPage <= 4) {
      for (let i = maxPage - 4; i <= maxPage; i++) {
        arr.push(i);
      }
    } else {
      for (let i = currentPage; i <= currentPage + 4; i++) {
        if (i - currentPage === 3) {
          arr.push("...");
        } else if (i === currentPage + 4) {
          arr.push(maxPage);
        } else arr.push(i);
      }
    }
    setVisiblePageNumbers(arr);
  }, [currentPage, maxPage]);

  return (
    <StyledPaginationContainer>
      <StyledPagination>
        <PaginationItem
          key={uuidv4()}
          isDisable={currentPage === minPage}
          onClick={() => dispatch(setCurrentPage(currentPage - 1))}
        />
        {visiblePageNumbers.map((num) => (
          <PaginationItem
            key={uuidv4()}
            text={String(num)}
            isActive={currentPage === num}
            isDots={num === "..."}
            onClick={() => dispatch(setCurrentPage(num as number))}
          />
        ))}
        <PaginationItem
          key={uuidv4()}
          isDisable={currentPage === maxPage}
          onClick={() => dispatch(setCurrentPage(currentPage + 1))}
        />
      </StyledPagination>
      <Subscription currentPage={currentPage} maxPage={maxPage} />
    </StyledPaginationContainer>
  );
}
