import React from "react";

import { Container } from "./styles";

import { TodoWidget } from "@widgets/TodoWidget";

export const MainPage: React.FC = () => {
  return (
    <Container>
      <TodoWidget />
    </Container>
  );
};
