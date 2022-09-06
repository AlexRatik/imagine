import { ICard } from "./ICard";
import styled from "styled-components";
import { ReactComponent as DeleteIcon } from "../../assets/deleteIcon.svg";

const StyledCard = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  transition: all 0.25s ease-in-out;
  img {
    display: block;
    max-height: 100%;
    max-width: 100%;
  }
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
  @media (max-width: 1240px) {
    width: 45%;
  }
  @media (max-width: 640px) {
    width: 80%;
  }
  @media (max-width: 400px) {
    width: 95%;
  }
`;

const StyledSubscription = styled.div`
  display: flex;
  align-items: center;
  margin-top: 10px;
  div {
    margin-left: 10px;
    p {
      line-height: 150%;
    }
    p:first-child {
      font-weight: 600;
    }
    p:last-child {
      font-size: 1rem;
    }
  }
  img {
    width: 38px;
    height: 38px;
  }
  @media (max-width: 640px) {
    font-size: 14px;
    img {
      width: 28px;
      height: 28px;
    }
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
