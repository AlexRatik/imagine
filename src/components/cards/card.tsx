import { ICard } from "./ICard";
import styled from "styled-components";
import { ReactComponent as DeleteIcon } from "../../assets/deleteIcon.svg";

const StyledCard = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  svg {
    position: absolute;
    top: 10px;
    right: 10px;
    transition: all 0.25s ease-in-out;
    &:hover {
      cursor: pointer;
      opacity: 0.6;
    }
  }
`;

const StyledSubscription = styled.div`
  display: flex;
  align-items: center;
  margin-top: 10px;
  div {
    margin-left: 10px;
    line-height: 150%;
    p:first-child {
      font-weight: 600;
    }
    p:last-child {
      font-size: 1rem;
    }
  }
  img {
    width: 2.2rem;
    height: 2.2rem;
  }
`;

export function Card({ author, avatarUrl, imageUrl, title }: ICard) {
  return (
    <StyledCard>
      <img src={imageUrl} alt={title} />
      <StyledSubscription>
        <img src={avatarUrl} alt={author} />
        <div>
          <p>{author}</p>
          <p>{title}</p>
        </div>
      </StyledSubscription>
      <DeleteIcon />
    </StyledCard>
  );
}
