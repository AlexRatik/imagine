import { Container } from "../container/container";
import { cardsStore } from "./cardsStore";
import { v4 as uuidv4 } from "uuid";
import { Card } from "./card";

export function Cards() {
  return (
    <Container width={2000} marginTop={60} marginBottom={100} gap={16}>
      {cardsStore.map((card) => (
        <Card key={uuidv4()} {...card} />
      ))}
    </Container>
  );
}
