import styled from "styled-components";

const StyledPaginationItem = styled.div`
  position: relative;
  width: 14%;
  height: 100%;
  border: 1px solid #dfdfdf;
  display: flex;
  align-items: center;
  transition: all 0.2s ease-in-out;
  &.active {
    background-color: #000000;
    color: #ffffff;
    pointer-events: none;
  }
  &.disabled {
    opacity: 0.3;
    pointer-events: none;
  }
  &.dots {
    pointer-events: none;
  }
  &:hover {
    cursor: pointer;
    background-color: #dfdfdf;
    color: #ffffff;
  }
  p {
    width: 100%;
    text-align: center;
  }
  //@media (max-width: 1400px) {
  //  width: 1.75rem;
  //  height: 1.75rem;
  //}
`;

interface IPaginationItemProps {
  text?: string;
  isActive?: boolean;
  isDisable?: boolean;
  isDots?: boolean;
  onClick: () => void;
}

export function PaginationItem({
  text,
  isActive,
  isDisable,
  isDots,
  onClick: clickHandler,
}: IPaginationItemProps) {
  return (
    <StyledPaginationItem
      onClick={clickHandler}
      className={
        isActive ? "active" : isDisable ? "disabled" : isDots ? "dots" : ""
      }
    >
      <p>{text}</p>
    </StyledPaginationItem>
  );
}
